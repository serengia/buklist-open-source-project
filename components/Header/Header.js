import React from "react";

import { BsFillPersonFill } from "react-icons/bs";
import Navbar from "./Navbar";
import s from "./Header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <Link href="/" className={s["logo"]}>
          Book store CMS
        </Link>
        <Navbar />
        <span className={s["user"]}>
          <BsFillPersonFill className={s["icon"]} />
        </span>
      </div>
    </header>
  );
}

export default Header;
