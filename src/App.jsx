import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Login from "./Components/Login";
import { LoginContext } from "./context/LoginContext";
import SelectBar from "./Components/SelectBar";
import { ComponentContext } from "./context/ComponentContext";
import Profile from "./Page/Profile";
import Estimate from "./Page/Estimate";
import Table from "./Page/Table";
import Header from "./Components/Header";

const App = () => {
  const [widget, setWidget] = useState(null);
  const { isLogin } = useContext(LoginContext);
  const { componentState, setComponentState } = useContext(ComponentContext);

  useEffect(() => {
    switch (componentState) {
      case 1:
        setWidget(
          <div className="Main-Content">
            <div className="Main-News">
              <News />
            </div>
            <div className="Main-Login">
              {isLogin ? <SelectBar /> : <Login />}
            </div>
          </div>
        );
        break;
      case 2:
        setWidget(<Profile />);
        break;
      case 3:
        setWidget(<Estimate />);
        break;
      case 4:
        setWidget(<Table />);
        break;
      default:
        setWidget(null);
        break;
    }
  }, [componentState, isLogin]);

  return (
    <div className="Main-Container">
      <div className="Main-Nav">
        <Navbar />
      </div>
      <div className="Main-Header">
        <Header />
      </div>

      <div className="Main-Select">{widget}</div>
    </div>
  );
};

export default App;
