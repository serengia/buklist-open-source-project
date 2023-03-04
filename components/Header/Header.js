import React from "react";

import { BsShieldLock } from "react-icons/bs";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const buttonClickHandler = () => {
    router.push("/login");
  };
  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <Link href="/" className={s["logo"]}>
          Buklist.com
        </Link>
        <Navbar />
        <div className={s["actions"]}>
          {/* <span className={s["user"]}>
          <BsFillPersonFill className={s["icon"]} />
        </span> */}
          <button className={s["auth-button"]} onClick={buttonClickHandler}>
            <BsShieldLock className={s["icon"]} />
            <span> SignIn/Register</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
