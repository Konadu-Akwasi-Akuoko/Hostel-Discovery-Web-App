import Image from "next/image";
import React from "react";
import heroImage from "@/assets/images/hero-image .png";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="horizontal-padding py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <Image
          src={heroImage}
          alt="A girl reading from here hostel"
          className="w-full lg:w-2/5 rounded-lg shadow-xl"
        />
        <div className="lg: flex flex-col justify-center">
          <h1 className="">
            Discover the best hostels that are budget friendly
          </h1>
          <p className="py-6">
            No matter what kind of hostel you&apos;re looking for, we have it
            covered. We&apos;ve curated a list of the best hostels near your
            school that offer comfort, convenience and value. You can filter by
            location, amenities, price and more to find your perfect match. Book
            now and enjoy your stay.
          </p>
          <Button className="w-fit" variant={"defaultTomato"}>
            Find A Hostel Now
          </Button>
        </div>
      </div>
    </div>
  );
}
