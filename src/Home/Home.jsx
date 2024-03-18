import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Category from "./Category";
import TopProducts from "./TopProducts";

const content = (
  <div className="min-h-[100vh]">
    <Hero />
    <FeaturedProducts />
    <Category />
    <TopProducts />
  </div>
);

export default function Home() {
  return content;
}
