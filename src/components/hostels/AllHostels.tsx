import React from "react";
import { hostelCardData_6 } from "@/data/mockup-data/hostelCard-data";
import Link from "next/link";
import FeaturedHostelCard from "../cards/FeaturedHostelCard";

export default function AllHostels() {
  return (
    <section className="my-12">
      <div className="flex flex-row flex-wrap justify-between gap-y-7">
        {hostelCardData_6.map((item, index) => {
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
    </section>
  );
}
