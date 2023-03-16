import React, { useState } from "react";

import { BsShieldLock } from "react-icons/bs";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BsBoxArrowRight } from "react-icons/bs";

function Header() {
  const router = useRouter();
  const [showPopper, setShowPopper] = useState(false);
  const { data: session, status } = useSession();
  const buttonClickHandler = () => {
    router.push("/login");
  };

  console.log("MY SESSION>", session);
  console.log("status>", status);

  const signOutHandler = () => {
    // close popper
    setShowPopper(false);

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
          {status === "unauthenticated" && (
            <button className={s["auth-button"]} onClick={buttonClickHandler}>
              <BsShieldLock className={s["icon"]} />
              <span> SignIn/Register</span>
            </button>
          )}

          {status === "authenticated" && (
            <div
              onClick={() => setShowPopper(!showPopper)}
              className={s["avatar-box"]}
            >
              <span className={s["name"]}> {session.user.name}</span>
              <div className={s["avatar"]}>
                <Image
                  src={"/img/users/user-placeholder.png"}
                  className={s["avatar-image"]}
                  width={30}
                  height={30}
                  alt={session.user.name}
                />
              </div>
            </div>
          )}

          {showPopper && (
            <div className={s["popper"]}>
              <ul className={s["popper-links"]}>
                <li>
                  <Link onClick={() => setShowPopper(false)} href="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setShowPopper(false)} href="/dashboard">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setShowPopper(false)} href="/dashboard">
                    Messages
                  </Link>
                </li>
              </ul>
              <button onClick={signOutHandler} className={s["logout-btn"]}>
                <BsBoxArrowRight className={s["icon"]} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
