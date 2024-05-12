import React from "react";
import s from "../style/slidingLine.module.css";

export default function SlidingLine() {
  return (
    <div className={s.container}>
      <div className={s.image} />
      <div className={s.image} />
    </div>
  );
}
