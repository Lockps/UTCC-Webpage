from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime
import mysql.connector
from flask_cors import cross_origin


app = Flask(__name__)

CORS(app)

SECRET_KEY = 'your-secret-key'

db_config = {
    'user': 'u724941005_nongkongnarak',
    'password': 'l90dbLE:',
    'host': 'srv1632.hstgr.io',
    'database': 'u724941005_utcc',
}


@app.route('/get_data', methods=['POST'])
def get_data():
    print("Get data")

    # Get the request data (body)
    data = request.get_json()

    # Extract the token from the body
    token = data.get('jwtToken')  # The key will be 'jwtToken'

    if not token:
        return jsonify({"error": "Token is required"}), 400

    try:
        # Decode the JWT token
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])

        user_id = payload.get('sub')

        if not user_id:
            return jsonify({"error": "Invalid token, no user ID found"}), 400

        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        cursor.execute(
            "SELECT id, username, name, surname FROM User WHERE id = %s", (user_id,))
        user = cursor.fetchone()

        if user:
            cursor.close()
            conn.close()
            print("User found:", user)
            return jsonify(user), 200
        else:
            cursor.close()
            conn.close()
            return jsonify({"error": "User not found"}), 404

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token has expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Invalid token"}), 400
    except mysql.connector.Error as err:
        return jsonify({"error": f"Database error: {err}"}), 500


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Login")

    if not data or not data.get('username') or not data.get('password'):
        return jsonify({"error": "Username and password are required"}), 400

    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        cursor.execute(
            "SELECT id, username, password, name, surname FROM User WHERE username = %s", (data['username'],))
        user = cursor.fetchone()

        if user and user['password'] == data['password']:
            payload = {
                'sub': user['id'],
                'username': user['username'],
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }
            token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

            cursor.close()
            conn.close()
            print("Successful!")

            return jsonify({
                "message": f"Welcome, {user['name']} {user['surname']}!",
                "token": token
            }), 200
        else:
            cursor.close()
            conn.close()
            print("Wrong Username or password")
            return jsonify({"error": "Invalid username or password"}), 401
    except mysql.connector.Error as err:
        print({err})
        return jsonify({"error": f"Database error: {err}"}), 500


if __name__ == '__main__':
    app.run(debug=True)
