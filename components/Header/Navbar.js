import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import { NavLink } from "react-router-dom";
import s from "./Navbar.module.scss";

function Navbar() {
  const router = useRouter();
  const { status } = useSession();

  return (
    <nav className={s["nav"]}>
      <ul className={s["nav-links"]}>
        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/" ? "active-link" : ""]
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        {status === "authenticated" && (
          <li
            className={`${s["nav-link"]} ${
              s[router.asPath == "/dashboard" ? "active-link" : ""]
            }`}
          >
            <Link href="/dashboard">Dashboard</Link>
          </li>
        )}

        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/books" ? "active-link" : ""]
          }`}
        >
          <Link href="/books">Books</Link>
        </li>
        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/categories" ? "active-link" : ""]
          }`}
        >
          <Link href="/categories">Categories</Link>
        </li>
        <li
          className={`${s["nav-link"]} ${
            s[router.asPath == "/about" ? "active-link" : ""]
          }`}
        >
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
