import React from "react";
import { NavLink } from "react-router-dom";
import style from "./lockoutstyle.module.css";
const Main = () => {
  return (
    <div className = {style.outest}>
    <div className={style.outer}>
      <NavLink to="/LockoutBot/create-contest">
        <button className={style.btn}>Create contest</button>
      </NavLink>
      <NavLink to="/LockoutBot/join-contest">
        <button className={style.btn}>Join contest</button>
      </NavLink>
    </div>
    </div>
  );
};

export default Main;
