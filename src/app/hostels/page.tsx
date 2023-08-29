import AllHostels from "@/components/hostels/AllHostels";
import SearchBar from "@/components/hostels/SearchBar";
import React from "react";

export default function Hostels() {
  return (
    <main className="horizontal-padding my-12">
      <SearchBar />
      <AllHostels />
    </main>
  );
}
