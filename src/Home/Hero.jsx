import React from "react";
import heroBg from "../assets/hero_bg.jpg";

const content = (
  <div
    className="hero min-h-screen relative"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="w-[30%] right-0 absolute m-[15%]">
        <h1 className="mb-5 text-7xl font-bold text-white">Get yours now</h1>
        <p className="mb-5 text-lg font-bold text-white">
          Discover the Latest Innovations in Technology Explore a Vast Selection
          of Smartphones, Laptops, Wearables.
        </p>
        <button className="btn btn-primary">Shop now</button>
      </div>
    </div>
  </div>
);

export default function Hero() {
  return content;
}
