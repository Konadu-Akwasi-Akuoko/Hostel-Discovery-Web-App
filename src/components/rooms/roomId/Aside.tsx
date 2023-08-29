import FloatingPriceCard from "@/components/cards/FloatingPriceCard";
import MeetYourManagerCard from "@/components/cards/MeetYourManagerCard";
import React from "react";

export default function Aside() {
  return (
    <aside className="w-full lg:w-[30%] relative mt-8 lg:mt-0 lg:sticky lg:top-12 h-fit">
      <FloatingPriceCard />
      <MeetYourManagerCard />
    </aside>
  );
}
