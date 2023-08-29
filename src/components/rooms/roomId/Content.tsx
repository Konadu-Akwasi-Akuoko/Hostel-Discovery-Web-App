import React from "react";
import Features from "./Features";
import AboutRoom from "./AboutRoom";
import FloatingPriceCard from "@/components/cards/FloatingPriceCard";
import ReviewsSection from "./ReviewsSection";
import Location from "./Location";
import MeetYourManagerCard from "@/components/cards/MeetYourManagerCard";
import Aside from "./Aside";

export default function Content() {
  return (
    <section className="mt-12 flex flex-col lg:flex-row justify-between mb-20">
      <div className="w-full lg:w-[65%]">
        <Features />
        <AboutRoom />
        <ReviewsSection />
        <Location />
      </div>
      {/* Floating Price Card */}
      <Aside />
    </section>
  );
}
