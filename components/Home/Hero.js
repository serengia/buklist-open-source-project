import React from "react";
import s from "./Hero.module.scss";
import { BsViewList } from "react-icons/bs";
// import { GiLightBulb } from "react-icons/gi";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const buttonClickHandler = () => {
    router.push("/login");
  };
  return (
    <section className={s["section-hero"]}>
      <div className={`${s["hero-container"]} row`}>
        <div className={s["content"]}>
          <h1 className={s["heading"]}>What are you reading?</h1>
          <p className={s["description"]}>
            {/* <GiLightBulb className={s["icon"]} /> */}
            Manage your reading list with ease and track your progress for free.
          </p>
          <button className={s["manage-btn"]} onClick={buttonClickHandler}>
            <BsViewList className={s["icon"]} /> Manage list
          </button>
        </div>
        <div className={s["image-wrapper"]}>
          <Image
            src="/img/hero-image.jpg"
            alt="Cleaning"
            fill={true}
            className={s["image"]}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
          <span className={s["by"]}>
            Photo by <span>Filios Sazeides</span>
          </span>
        </div>
      </div>
    </section>
  );
}
