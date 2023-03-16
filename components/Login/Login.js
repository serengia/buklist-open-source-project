import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Button from "../UI/FormInputs/Button";
import FormInput from "../UI/FormInputs/FormInput";
import s from "./Login.module.scss";
import GoogleIcon from "../../public/svg/google.svg";
import GithubIcon from "../../public/svg/github.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/");
    }
  };

  const googleLoginHandler = () => {
    signIn("google", { callbackUrl: "/" });
  };
  const githubLoginHandler = () => {
    signIn("github", { callbackUrl: "/" });
  };
  return (
    <div className={s["login-page"]}>
      <div className={`${s["container"]} row`}>
        <div className={s["form-wrapper"]}>
          <h2 className={s["heading"]}>Login/Register</h2>
          <form className={s["form"]} onSubmit={submitHandler}>
            <FormInput
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@gmail.com"
            />
            <FormInput
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <Button type="submit">Submit</Button>
            <span className={s["or"]}>
              <span className={`${s["dash"]} ${s["dash-left"]}`}></span> or
              <span className={`${s["dash"]} ${s["dash-right"]}`}></span>
            </span>
            <button
              type="button"
              className={`${s["sign-in-with-btn"]} ${s["sign-in-with-btn-google"]}`}
              onClick={googleLoginHandler}
            >
              <GoogleIcon
                className={`${s["login-icon"]} ${s["login-icon-google"]}`}
              />
              Sign in with Google
            </button>
            <button
              type="button"
              className={`${s["sign-in-with-btn"]} ${s["sign-in-with-btn-github"]}`}
              onClick={githubLoginHandler}
            >
              <GithubIcon
                className={`${s["login-icon"]} ${s["login-icon-google"]}`}
              />
              Sign in with Github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
