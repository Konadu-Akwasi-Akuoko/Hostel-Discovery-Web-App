import Hero from "@/components/Home/Hero";
import PopularHostels from "@/components/Home/PopularHostels";
import Search from "@/components/Home/Search";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Search />
      <PopularHostels />
    </main>
  );
}
