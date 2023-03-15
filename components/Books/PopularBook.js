import Image from "next/image";
import React from "react";
import s from "./PopularBook.module.scss";

export default function PopularBook(props) {
  const { imageUrl, title, author } = props;
  return (
    <div className={s["book"]}>
      <div
        className={s["image-wrapper"]}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(1, 1, 36, 0.7), rgba(1, 1, 36, 0.7)), url(${imageUrl})`,
        }}
      >
        <Image src={imageUrl} fill className={s["image"]} alt={title} />
      </div>
      <div className={s["content"]}>
        <h3>{title}</h3>
        <p>
          Author: <span>{author}</span>
        </p>
      </div>
    </div>
  );
}
