import React from "react";
import Menu, { menu } from "./Menu";
const categoryList = {
  appetizer: [
    {
      id: 1,
      name: "Tahu Sumedang",
      img: "./menu-dish/Appetizer/Tahu Sumedang.jpg",
    },
    {
      id: 2,
      name: "Cireng Rujak",
      img: "./menu-dish/Appetizer/cirengRujak.jpg",
    },
    {
      id: 3,
      name: "Tempe Mendoan",
      img: "./menu-dish/Appetizer/mendoan.jpg",
    },
  ],
  main_course: [
    {
      id: 1,
      name: "Nasi Liwet Komplit",
      img: "./menu-dish/Main-Course/nasi liwet.jpg",
    },
    {
      id: 2,
      name: "Ayam Goreng Kampung",
      img: "./menu-dish/Main-Course/ayam goreng.jpg",
    },
    {
      id: 3,
      name: "Soto Bandung",
      img: "./menu-dish/Main-Course/soto bandung.jpg",
    },
    {
      id: 4,
      name: "Pepes Ikan Mas",
      img: "./menu-dish/Main-Course/pepes.jpg",
    },
  ],
  desserts: [
    {
      id: 1,
      name: "Cendol",
      img: "./menu-dish/Desserts/cendol.jpg",
    },
    {
      id: 2,
      name: "Es Goyobod",
      img: "./menu-dish/Desserts/esgoyo.jpg",
    },
    {
      id: 3,
      name: "Kolak Pisang",
      img: "./menu-dish/Desserts/kolak_pisang.jpg",
    },
    {
      id: 4,
      name: "Kolak Biji Salak",
      img: "./menu-dish/Desserts/kolak_ubi.jpg",
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Es Jeruk Peras",
      img: "./menu-dish/beverages/esjeruk.jpg",
    },
    {
      id: 2,
      name: "Teh Manis",
      img: "./menu-dish/beverages/tehmanis.jpg",
    },
    {
      id: 3,
      name: "Bajigur",
      img: "./menu-dish/beverages/bajigur.jpg",
    },
    {
      id: 4,
      name: "Teh Tubruk",
      img: "./menu-dish/beverages/tehtubruk.jpg",
    },
  ],
};

export default function CategoryItem({ active }) {
  const items = categoryList[active];

  return (
    <div className="category-item">
      {items.map((item) => (
        <div key={item.id} className="item-wrapper">
          <div className="item-img">
            <img src={item.img} alt={item.name} />
          </div>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}
