import React from "react";
const img = [
  {
    id: 1,
    src: "./about img/karedok.jpg",
  },
  {
    id: 2,
    src: "./about img/nasi bakar.jpg",
  },
  {
    id: 3,
    src: "./about img/nasi tutug.jpg",
  },
  {
    id: 4,
    src: "./about img/pesmol.jpg",
  },
];
const img2 = [
  {
    id: 2,
    src: "./about img/rujak cuka.jpg",
  },
];
export default function About() {
  return (
    <section id="About" className="about">
      <div className="container">
        <div className="about-deskripsi">
          <h1>About Us</h1>
          <p>
            At Sundanese Cuisine, we are passionate about sharing the authentic
            flavors and traditions of West Java's rich culinary heritage. Our
            mission is to bring the essence of Sundanese culture to your plate,
            offering fresh ingredients, vibrant dishes, and a dining experience
            that celebrates simplicity, balance, and nature. From the crisp
            freshness of lalapan to the bold taste of sambal dadak, every dish
            is crafted with care and respect for time-honored recipes. Join us
            on a flavorful journey and discover the warmth and hospitality of
            Sundanese food culture.
          </p>
        </div>
        <div className="about-img-wrapper">
          {img.map((item) => (
            <div className="about-img" key={item.id}>
              <img src={item.src} alt="about img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
