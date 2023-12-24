import { useState } from "react";

import { useNavigate } from "react-router-dom";
import style from "./Account.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Login = () => {
  const message = localStorage.getItem("message");

  const history = useNavigate();
  const [credentials, setCredentials] = useState({ emailId: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailId: credentials.emailId,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    if (json.success === true) {
      //Redirect'
      localStorage.setItem("token", json.authToken);
      json.user.isLoggedin = true;
      localStorage.setItem("User", JSON.stringify(json.user));
      const temp = localStorage.getItem("User");
      localStorage.setItem("message", "Successfully, Logged In");
      history("/");
    }
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.outer}>
      <div className={style.codeplus}>
        <p className={style.p}>{message}</p>
      </div>
      <div className={style.account}>
        <div className={style.btn}>
          <div></div>
          <NavLink to="/signup">
            <button className={style.Signup1}>Sign Up</button>
          </NavLink>
          <button className={style.Login1}>Log In</button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginLeft: "20px" }}>
              <h3>Fill your account Details:</h3>
            </div>
            <div className={style.form}>
              <div>
                <label className={style.label}>College Email Id: </label>
                <input
                  type="text"
                  name="emailId"
                  value={credentials.emailId}
                  onChange={handleChange}
                  className={style.input1}
                />
              </div>
              <div>
                <label className={style.label}>Password:</label>
                <input
                  type="text"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className={style.input1}
                />
              </div>
            </div>
            <div className={style.label}>
              <label>
                <input type="checkbox" name="check" />
                Remember me
              </label>
            </div>
            <div className={style.buttonbox}>
              <button className={style.button}>LOG IN</button>
            </div>
            <div>{/* <p>{!credentials ? "wrong credential" : null}</p> */}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
