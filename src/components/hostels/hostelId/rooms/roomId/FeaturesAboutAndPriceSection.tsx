import React from "react";
import FeatureAndPrice from "./FeaturesAndPrice";
import AboutRoom from "./AboutRoom";
import FloatingPriceCard from "@/components/cards/FloatingPriceCard";
import ReviewsSection from "./ReviewsSection";

export default function FeaturesAboutAndReviewSection() {
  return (
    <section className="mt-12 flex flex-col lg:flex-row justify-between mb-20">
      <div className="w-full lg:w-[65%]">
        <FeatureAndPrice />
        <AboutRoom />
        <ReviewsSection />
      </div>
      {/* Floating Price Card */}
      <FloatingPriceCard />
    </section>
  );
}
