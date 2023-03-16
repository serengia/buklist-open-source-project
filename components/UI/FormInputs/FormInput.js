import React from "react";
import s from "./FormInput.module.scss";

export default function FormInput(props) {
  const { type, id, label } = props;

  return (
    <div className={s["input-wrapper"]}>
      <label htmlFor={id}>{label}</label>
      <input type={type || "text"} {...props} />
    </div>
  );
}
