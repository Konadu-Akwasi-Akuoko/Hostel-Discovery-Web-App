import AllRooms from "@/components/rooms/AllRooms";
import AsideSearch from "@/components/rooms/AsideSearch";
import React from "react";

export default function Rooms() {
  return (
    <div className="horizontal-padding">
      <h1 className="py-0 lg:pt-12">Find your perfect hostel room</h1>
      <main className="lg:mt-12 flex flex-col lg:flex-row justify-between mb-20">
        <AsideSearch />
        <AllRooms />
      </main>
    </div>
  );
}
