import React from "react";
import FeaturedHostelCard from "../cards/FeaturedHostelCard";
import { hostelCardData_4 } from "@/data/mockup-data/hostelCard-data";
import Link from "next/link";

export default function AllFeaturedHostels() {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-7">
      {hostelCardData_4.map((item, index) => {
        return (
          <Link href={"/"} key={index} className="w-full lg:w-[45%]">
            <FeaturedHostelCard
              hostelImg={item.image}
              hostelName={item.name}
              hostelDistanceToCampus={item.hostelDistanceToCampus}
              hostelRating={item.hostelRating}
              className=" w-full"
            />
          </Link>
        );
      })}
    </div>
  );
}
