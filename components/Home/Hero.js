import React from "react";
import s from "./Hero.module.scss";
import { BsViewList } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  const buttonClickHandler = () => {
    router.push("/login");
  };
  return (
    <section className={s["section-hero"]}>
      <div
        className={`${s["hero-container"]} row`}
        style={{ backgroundImage: "url('/img/hero-image.jpg')" }}
      >
        <div className={s["content"]}>
          <h1>What are you reading?</h1>
          <p>Manage your reading list by ease</p>
          <button className={s["manage-btn"]} onClick={buttonClickHandler}>
            <BsViewList className={s["icon"]} /> Manage list
          </button>
        </div>
      </div>
    </section>
  );
}
