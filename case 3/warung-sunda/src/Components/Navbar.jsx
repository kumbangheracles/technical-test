import React, { useState } from "react";
import { navData } from "../assets/Data";
export default function Navbar() {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive(!active);
  }
  function rmClass() {
    setActive(false);
  }
  return (
    <section className="nav">
      <nav>
        <div className="logo">
          <h4>W.S</h4>
        </div>
        <ul
          className={`inActive ${active ? "active" : ""}`}
          onClick={toggleActive}
        >
          {navData.map((item) => (
            <li key={item.id}>
              <a href={item.src} onClick={rmClass}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`burger ${active ? "bactive" : ""}`}
          onClick={toggleActive}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </section>
  );
}
