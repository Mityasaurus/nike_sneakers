import React from "react";
import SneakersCardHorz from "./SneakersCardHorz";
import shuffle from "../utils/shuffle";

export default function SneakersCardsHorzList({ type, size }) {
  const allItems = [
    { name: "Air Max 90", price: "120", isNew: "false" },
    { name: "Air Force 1", price: "90", isNew: "true" },
    { name: "React Element 55", price: "130", isNew: "false" },
    { name: "Air VaporMax", price: "190", isNew: "true" },
    { name: "Blazer Mid '77", price: "100", isNew: "false" },
    { name: "Air Max 270", price: "150", isNew: "true" },
    { name: "Zoom Fly SP", price: "150", isNew: "false" },
    { name: "Air Presto", price: "120", isNew: "true" },
  ];
  let items = shuffle(allItems);
  items =
    type === "new"
      ? items.filter((i) => i.isNew === "true")
      : items.filter((i) => i.isNew === "false");

  items = items.slice(0, size);
  console.log(items);
  return items.map((s) => <SneakersCardHorz name={s.name} type={type} />);
}
