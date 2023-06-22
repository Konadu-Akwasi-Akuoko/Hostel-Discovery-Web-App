import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero-image .png";

export default function Hero() {
  return (
    <div className="horizontal-padding hero py-16">
      <div className="hero-content gap-10 flex-col lg:flex-row">
        <Image
          src={heroImage}
          alt="Find a hostel near you"
          className=" w-full lg:w-2/5 rounded-lg shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-rose-700">
            Discover the best hostels that are budget friendly
          </h1>
          <p className="py-6">
            No matter what kind of hostel you&apos;re looking for, we have it
            covered. We&apos;ve curated a list of the best hostels near your
            school that offer comfort, convenience and value. You can filter by
            location, amenities, price and more to find your perfect match. Book
            now and enjoy your stay.
          </p>
          <button className="btn  bg-rose-700 hover:bg-rose-950 text-white">
            Find A Hostel Now
          </button>
        </div>
      </div>
    </div>
  );
}
