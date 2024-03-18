import React from "react";
import keyboard_1 from "../assets/keyboard_1.jpg";
import keyboard_2 from "../assets/keyboard_2.jpg";
import keyboard_3 from "../assets/keyboard_3.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: keyboard_1,
    title: "NPET K80 TKL Tenkeyless Gaming Keyboard",
    price: 4000,
  },
  {
    id: 2,
    img: keyboard_2,
    title: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 5000,
  },
  {
    id: 3,
    img: keyboard_3,
    title: "MageGee Mechanical Gaming Keyboard",
    price: 8000,
  },
  {
    id: 4,
    img: keyboard_3,
    title: "MageGee Mechanical Gaming Keyboard",
    price: 8000,
  },
];

const content = (
  <div className="flex flex-col gap-5 w-[90%] mx-auto my-16">
    <h1 className="text-xl text-black font-bold">Featured Products</h1>
    <div className="flex gap-10">
      {data.map((item) => (
        <Link to="/product/:id">
          <div
            item={item}
            key={item.id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={item.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-200">
                {item.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p className="text-slate-200 font-bold">₱ {item.price}.00</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-slate-200">Gadget</div>
                <div className="badge badge-outline text-slate-200">
                  Products
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function FeaturedProducts() {
  return content;
}
