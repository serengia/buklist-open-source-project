import React from "react";
import s from "./About.module.scss";

export default function About() {
  return (
    <div className={s["about-page"]}>
      <section className={s["section-about"]}>
        <div className={`${s["content"]} row`}>
          <h1>About Us</h1>
          <p>Our mission is simple:</p>
          <p className={s["mission"]}>
            To help you achieve your reading goals and contribute in making your
            future brighter.
          </p>
          <h2>Message from our founder</h2>
          <div className={s["founder-message"]}>
            Image
            <div className={s["story"]}>
              <p>
                After spending 30 minutes on social media, many times you leave
                feeling depressed instead of being uplifted. I wanted to change
                that by create a platform that actually empowers. Our goal is to
                make you feel proud of yourself for every minute you spend on
                our platform. - James Serengia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
