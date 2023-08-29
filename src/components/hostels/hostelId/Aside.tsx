import MeetYourManagerCard from "@/components/cards/MeetYourManagerCard";
import React from "react";
import Location from "./Location";

export default function Aside() {
  return (
    <aside className="w-full lg:w-[30%] relative mt-8 lg:mt-0 lg:sticky lg:top-12 h-fit">
      <Location />
      <MeetYourManagerCard />
    </aside>
  );
}
