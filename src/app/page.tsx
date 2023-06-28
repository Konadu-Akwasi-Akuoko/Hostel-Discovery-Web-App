import Hero from "@/components/Home/Hero";
import FeaturedHostels from "@/components/Home/FeaturedHostels";
import Search from "@/components/Home/Search";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Search />
      <FeaturedHostels />
    </main>
  );
}
