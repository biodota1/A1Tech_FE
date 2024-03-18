import React from "react";
import catCase from "../assets/cat_case.jpg";
import catGraphicCard from "../assets/cat_graphics_card.jpg";
import catHardDrive from "../assets/cat_hard_drive.jpg";
import catKeyboard from "../assets/cat_keyboard.jpg";
import catMonitor from "../assets/cat_monitor.jpg";
import catMouse from "../assets/cat_mouse.jpg";
import catPowerSupply from "../assets/cat_power_supply.jpg";
import catRam from "../assets/cat_ram.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Monitors",
    image: catMonitor,
  },
  {
    id: 2,
    name: "Cases",
    image: catCase,
  },
  {
    id: 3,
    name: "Graphics Card",
    image: catGraphicCard,
  },
  {
    id: 4,
    name: "Hard Drives",
    image: catHardDrive,
  },
  {
    id: 5,
    name: "Ram",
    image: catRam,
  },
  {
    id: 6,
    name: "Power Supply",
    image: catPowerSupply,
  },
  {
    id: 7,
    name: "Keyboards",
    image: catKeyboard,
  },
  {
    id: 8,
    name: "Mouse",
    image: catMouse,
  },
];

const content = (
  <div className="w-[90%] mx-auto p">
    <h1 className="text-xl text-black font-bold">Categories</h1>
    <div className="grid grid-cols-4 gap-5 my-5 shadow-lg">
      {data.map((item) => (
        <Link to="/products/:id">
          <div
            item={item}
            key={item.id}
            className="h-[100px] border-2 border-black rounded-md p-2 bg-white"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundPosition: "50% 40%",
              backgroundSize: "40%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-xl text-black font-semibold">{item.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default function Category() {
  return content;
}
