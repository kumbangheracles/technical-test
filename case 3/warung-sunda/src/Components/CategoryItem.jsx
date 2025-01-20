import React from "react";
import Menu, { menu } from "./Menu";
import Aos from "aos";
import { useEffect } from "react";
const categoryList = {
  appetizer: [
    {
      id: 1,
      name: "Tahu Sumedang",
      img: "./menu-dish/Appetizer/Tahu Sumedang.jpg",
      description:
        "Crispy fried tofu from Sumedang with a soft and delicate interior, perfect for snacking.",
    },
    {
      id: 2,
      name: "Cireng Rujak",
      img: "./menu-dish/Appetizer/cirengRujak.jpg",
      description:
        "Chewy fried tapioca served with a sweet and spicy rujak sauce, a flavorful combination.",
    },
    {
      id: 3,
      name: "Tempe Mendoan",
      img: "./menu-dish/Appetizer/mendoan.jpg",
      description:
        "Thinly sliced tempeh coated in seasoned batter and fried for a deliciously crispy snack.",
    },
  ],
  main_course: [
    {
      id: 1,
      name: "Nasi Liwet Komplit",
      img: "./menu-dish/Main-Course/nasi liwet.jpg",
      description:
        "A traditional Sundanese dish of fragrant coconut rice served with a variety of savory side dishes.",
    },
    {
      id: 2,
      name: "Ayam Goreng Kampung",
      img: "./menu-dish/Main-Course/ayam goreng.jpg",
      description:
        "Fried free-range chicken seasoned with aromatic spices for a rich and savory taste.",
    },
    {
      id: 3,
      name: "Soto Bandung",
      img: "./menu-dish/Main-Course/soto bandung.jpg",
      description:
        "A clear beef soup from Bandung, featuring tender beef, radish slices, and flavorful broth.",
    },
    {
      id: 4,
      name: "Pepes Ikan Mas",
      img: "./menu-dish/Main-Course/pepes.jpg",
      description:
        "Fresh carp fish marinated with spices, wrapped in banana leaves, and steamed for a tender and aromatic dish.",
    },
  ],
  desserts: [
    {
      id: 1,
      name: "Cendol",
      img: "./menu-dish/Desserts/cendol.jpg",
      description:
        "A refreshing traditional dessert with green rice flour jelly, coconut milk, and palm sugar syrup.",
    },
    {
      id: 2,
      name: "Es Goyobod",
      img: "./menu-dish/Desserts/esgoyo.jpg",
      description:
        "A traditional Sundanese iced dessert made with agar-agar jelly, coconut milk, and sweet syrup.",
    },
    {
      id: 3,
      name: "Kolak Pisang",
      img: "./menu-dish/Desserts/kolak_pisang.jpg",
      description:
        "Sweet banana stew in coconut milk, flavored with palm sugar for a comforting dessert.",
    },
    {
      id: 4,
      name: "Kolak Biji Salak",
      img: "./menu-dish/Desserts/kolak_ubi.jpg",
      description:
        "A dessert of sweet potato dumplings in coconut milk and palm sugar syrup, soft and satisfying.",
    },
  ],
  beverages: [
    {
      id: 1,
      name: "Es Jeruk Peras",
      img: "./menu-dish/beverages/esjeruk.jpg",
      description:
        "Freshly squeezed orange juice served cold, with just a touch of sugar for natural sweetness.",
    },
    {
      id: 2,
      name: "Teh Manis",
      img: "./menu-dish/beverages/tehmanis.jpg",
      description:
        "A comforting cup of warm black tea, sweetened to perfection with granulated sugar.",
    },
    {
      id: 3,
      name: "Bajigur",
      img: "./menu-dish/beverages/bajigur.jpg",
      description:
        "A warm and creamy Sundanese drink made with coconut milk, palm sugar, and fragrant spices.",
    },
    {
      id: 4,
      name: "Teh Tubruk",
      img: "./menu-dish/beverages/tehtubruk.jpg",
      description:
        "Traditional loose-leaf tea brewed for a bold flavor, served unstrained for an authentic experience.",
    },
  ],
};

export default function CategoryItem({ active }) {
  const items = categoryList[active];
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
  }, []);
  return (
    <div className="category-item" data-aos="fade-up">
      {items.map((item) => (
        <div key={item.id} className="item-wrapper">
          <div className="item-img">
            <img src={item.img} alt={item.name} />
          </div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
