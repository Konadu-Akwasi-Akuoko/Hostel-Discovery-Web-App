import React from "react";
import StatsBar from "./StatsBar";
import PictureSection from "./PictureSection";
import NameAndAbout from "./NameAndAbout";
import Aside from "./Aside";
import Features from "./Features";
import Rooms from "./Rooms";

export default function Content() {
  return (
    <>
      <StatsBar />
      <PictureSection />
      <section className="mt-12 flex flex-col lg:flex-row justify-between mb-20">
        {/* Main content */}
        <div className="w-full lg:w-[65%]">
          <NameAndAbout />
          <Features />
          <Rooms />
        </div>
        {/* Aside */}
        <Aside />
      </section>
    </>
  );
}
