import React from "react";

import keyboard_1 from "../assets/keyboard_1.jpg";
import keyboard_2 from "../assets/keyboard_2.jpg";
import keyboard_3 from "../assets/keyboard_3.jpg";
import mouse_1 from "../assets/mouse_1.jpg";
import case_1 from "../assets/case_1.jpg";
import case_2 from "../assets/case_2.jpg";

const data = [
  {
    id: 1,
    img: mouse_1,
    title: "NPET K80 TKL Tenkeyless Gaming Keyboard",
    price: 4000,
  },
  {
    id: 2,
    img: case_2,
    title: "Logitech G Pro X Mechanical Gaming Keyboard",
    price: 5000,
  },
  {
    id: 3,
    img: case_1,
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
  <div className="min-h-[100vh]">
    <div className="w-[80%] mx-auto">
      <img src="" alt="" />
    </div>
  </div>
);

export default function Product() {
  return content;
}
