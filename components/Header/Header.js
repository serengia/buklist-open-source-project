import React from "react";

import { BsShieldLock } from "react-icons/bs";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const buttonClickHandler = () => {
    router.push("/login");
  };

  console.log("MY SESSION>", session);
  console.log("status>", status);

  const signOutHandler = () => {
    signOut({ redirect: false });
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
          {status === "unauthenticated" && (
            <button className={s["auth-button"]} onClick={buttonClickHandler}>
              <BsShieldLock className={s["icon"]} />
              <span> SignIn/Register</span>
            </button>
          )}
          {status === "authenticated" && <span> {session.user.email}</span>}
          {status === "authenticated" && (
            <button onClick={signOutHandler}>Logout</button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
