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
                'sub': str(user['id']),
                'username': user['username'],
                'name': user['name'],
                'surname': user['surname'],
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


@app.route('/profile', methods=['POST'])
def profile():
    data = request.get_json()
    print(data, end="\n\n")
    token = data.get('token').strip()
    print(token)
    if not token:
        return jsonify({"error": "Token is missing"}), 400

    try:
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=[
                                   'HS256'], options={"verify_exp": False})
        user_id = decoded_token.get('sub')
        print(user_id)

        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        cursor.execute(
            "SELECT * FROM StudentDetails WHERE Userid = %s", (user_id,))
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if user:
            return jsonify({
                "user": user
            }), 200
        else:
            return jsonify({"error": "User not found"}), 404
    except jwt.ExpiredSignatureError:
        print("exp")
        return jsonify({"error": "Token has expired"}), 401
    except jwt.InvalidTokenError:
        print("Invalid Token")
        return jsonify({"error": "Invalid token"}), 401
    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return jsonify({"error": "Database connection failed"}), 500


if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)
