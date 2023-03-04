import React from "react";
import s from "./Login.module.scss";

export default function Login() {
  return (
    <div className={s["login-page"]}>
      <div className={`${s["container"]} row`}>
        <h2 className={s["heading"]}>Login/Register</h2>
      </div>
    </div>
  );
}
