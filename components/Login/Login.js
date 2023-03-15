import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import s from "./Login.module.scss";

export default function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/");
    }
  };
  return (
    <div className={s["login-page"]}>
      <div className={`${s["container"]} row`}>
        <h2 className={s["heading"]}>Login/Register</h2>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            id=""
            ref={emailInputRef}
            placeholder="john@gmail.com"
          />
          <input
            type="password"
            name="password"
            ref={passwordInputRef}
            placeholder="Enter password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
