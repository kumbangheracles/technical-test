import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const menu = [
  {
    id: 1,
    title: "Appetizer",
    src: "./Menu icon/icons8-appetizer-100.png",
    key: "appetizer",
  },
  {
    id: 2,
    title: "Main Course",
    src: "./Menu icon/icons8-fish-and-vegetables-100.png",
    key: "main_course",
  },
  {
    id: 3,
    title: "Desserts",
    src: "./Menu icon/icons8-dessert-100.png",
    key: "desserts",
  },
  {
    id: 4,
    title: "Beverages",
    src: "./Menu icon/icons8-beverages-100.png",
    key: "beverages",
  },
];

export { menu };

export default function Menu() {
  const [active, setActive] = useState("appetizer");
  const [isLoading, setIsLoading] = useState(false);
  function handleActive(key) {
    setIsLoading(true);
    setTimeout(() => {
      setActive(key);
      setIsLoading(false);
    }, 1200);
  }
  return (
    <section className="menu" id="Menu">
      <h1>Menu Category</h1>
      <div className="menu-category">
        {menu.map((item) => (
          <span
            onClick={(e) => {
              e.preventDefault();
              handleActive(item.key);
            }}
            key={item.id}
            className={`menu-link ${active === item.key ? "setactive" : ""}`}
          >
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </span>
        ))}
      </div>
      {isLoading ? (
        <p className="loader"></p>
      ) : (
        <CategoryItem active={active} />
      )}
    </section>
  );
}
