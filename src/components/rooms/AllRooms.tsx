import React from "react";
import HighlyRatedRoomCard from "../cards/HighlyRatedRoomCard";
import { featuredHostelRoom_6 } from "@/data/mockup-data/hostelCard-data";

export default function AllRooms() {
  return (
    <section className="w-full lg:lg:w-3/4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mt-6">
        {featuredHostelRoom_6.slice(0, 4).map((item, index) => {
          return (
            <HighlyRatedRoomCard
              key={index}
              image={item.image}
              parentHostelName={item.parentHostelName}
              hostelRoomName={item.hostelRoomName}
              isSharedBathhouse={item.isSharedBathhouse}
              isSharedKitchen={item.isSharedKitchen}
              personPerRoom={item.personPerRoom}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
}
