import React from "react";
import s from "./Button.module.scss";

export default function Button({
  type,
  variation = "primary",
  children,
  onClick,
  fullWidth,
}) {
  const btnClasses =
    variation === "primary" ? s["button-primary"] : s["button-secondary"];
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${btnClasses} ${s["button"]}`}
      style={{ width: fullWidth ? "100%" : null }}
    >
      {children}
    </button>
  );
}
