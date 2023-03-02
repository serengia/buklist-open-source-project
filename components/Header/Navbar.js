import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";

function Navbar() {
  const router = useRouter();
  return (
    <nav className={s["nav"]}>
      <ul className={s["nav-links"]}>
        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/" ? "active" : ""]
          }`}
        >
          <Link href="/">Books</Link>
        </li>
        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/" ? "active" : ""]
          }`}
        >
          <Link href="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
