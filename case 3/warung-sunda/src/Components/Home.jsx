import React, { useState } from "react";
import homeImg from "../assets/img/home img/home.jpg";
import homeImg2 from "../assets/img/home img/Nasi Liwet.jpg";
import homeImg3 from "../assets/img/home img/Indonesian Food.jpg";
import back from "../assets/img/home img/back.svg";
import next from "../assets/img/home img/next.svg";
const img = [homeImg, homeImg2, homeImg3];
export default function Home() {
  const [slide, setSlide] = useState(0);
  function handlePrev() {
    setSlide((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  }
  function handleNext() {
    setSlide((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  }
  return (
    <section id="#Home" className="home">
      <div className="container">
        <div className="button-wrapper">
          <button onClick={handlePrev}>
            <img src={back} alt="" />
          </button>
          <button>
            <img src={next} alt="" onClick={handleNext} />
          </button>
        </div>

        <div className={`home-img`} style={{ translate: `${-100 * slide}%` }}>
          <img src={img[0]} />
          <img src={img[1]} />
          <img src={img[2]} />
        </div>
      </div>
      <div className="home-text">
        <h1>Warung Sunda</h1>
        <h2>Discover Sundanese Cuisine</h2>
        <p>
          Immerse yourself in the rich culinary heritage of Sundanese cuisine,
          where simplicity meets vibrant flavors. Known for its fresh
          ingredients, fragrant spices, and iconic dishes like nasi liwet,
          karedok, and sambal dadak, Sundanese food offers a unique blend of
          savory, sweet, and spicy tastes. Experience the warmth of traditional
          Sundanese meals, often enjoyed with steamed rice, fresh vegetables,
          and a refreshing touch of lalapan. Perfect for those seeking an
          authentic taste of West Java’s culinary traditions.
        </p>
      </div>
    </section>
  );
}
