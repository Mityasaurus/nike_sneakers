import React from "react";
import SneakersCardHorz from "./SneakersCardHorz";
import shuffle from "../utils/shuffle";

export default function SneakersCardsHorzList({ type, size, sneakersData }) {
  let items = shuffle(sneakersData);
  items =
    type === "new"
      ? items.filter((i) => i.isNew === "true")
      : items.filter((i) => i.isNew === "false");

  items = items.slice(0, size);
  return items.map((s) => (
    <SneakersCardHorz name={s.name} type={type} img={s.img} />
  ));
}
