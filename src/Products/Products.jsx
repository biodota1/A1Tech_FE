import React from "react";
import keyboard_1 from "../assets/keyboard_1.jpg";
import keyboard_2 from "../assets/keyboard_2.jpg";
import keyboard_3 from "../assets/keyboard_3.jpg";

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
  <div className="h-[100vh] p-10 flex">
    <div className="w-40">
      <h2>Product Categories</h2>
      <div className="form-control py-5">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="label-text">Keyboard</span>
        </label>
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="label-text">Mouse</span>
        </label>
      </div>
      <h2 className="pb-5">Filter by price</h2>
      <input
        type="range"
        min={0}
        max="100"
        value="25"
        className="range"
        step="25"
      />
      <div className="w-full flex justify-between text-xs px-2">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <h1 className="pt-5">Sort by</h1>
      <div className="form-control py-5">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="label-text">Price (Lowest first)</span>
        </label>
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span className="label-text">Price (Highest first)</span>
        </label>
      </div>
    </div>
    <div className="flex gap-10 w-48 px-10">
      {data.map((item) => (
        <div
          item={item}
          key={item.id}
          className="card w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={item.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>₱ {item.price}.00</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Gadget</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Products() {
  return content;
}
