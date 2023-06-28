import React from "react";
import FeaturedHostelCard from "../cards/FeaturedHostelCard";
import img1 from "@/assets/images/home1.jpg";
import AllFeaturedHostels from "./AllFeaturedHostels";

export default function FeaturedHostels() {
  return (
    <section className="horizontal-padding mb-16">
      <h2 className="mb-8">Featured Hostels</h2>
      <AllFeaturedHostels />
    </section>
  );
}
