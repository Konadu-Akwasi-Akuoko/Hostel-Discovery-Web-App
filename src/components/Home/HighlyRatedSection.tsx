import React from "react";
import { featuredHostelRoom_6 } from "@/data/mockup-data/hostelCard-data";
import HighlyRatedRoomCard from "../cards/HighlyRatedRoomCard";

export default function HighlyRatedSection() {
  return (
    <div className="horizontal-padding mb-16">
      <h2 className="mb-8">High Rated Hostel Rooms</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
        {featuredHostelRoom_6.map((item, index) => {
          return (
            <HighlyRatedRoomCard
              key={index}
              image={item.image}
              parentHostelName={item.parentHostelName}
              hostelRoomName={item.hostelRoomName}
              hostelRoomRating={item.hostelRoomRating}
              isSharedBathhouse={item.isSharedBathhouse}
              isSharedKitchen={item.isSharedKitchen}
              personPerRoom={item.personPerRoom}
              roomSize={item.roomSize}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
