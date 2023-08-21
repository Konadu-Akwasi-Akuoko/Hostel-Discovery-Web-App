import React from "react";
import FeatureAndPrice from "./FeaturesAndPrice";
import AboutRoom from "./AboutRoom";
import FloatingPriceCard from "@/components/cards/FloatingPriceCard";
import ReviewsSection from "./ReviewsSection";

export default function FeaturesAboutAndReviewSection() {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-[65%]">
        <FeatureAndPrice />
        <AboutRoom />
        <ReviewsSection />
      </div>
      {/* Floating Price Card */}
      <FloatingPriceCard />
    </div>
  );
}
