"use client";
/* eslint-disable @next/next/no-img-element */
import { hostelCardData } from "@/data/mockup-data/hostelCard-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PopularHostels() {
  return (
    <section className="horizontal-padding">
      <div className="flex flex-row flex-wrap gap-y-10 justify-between">
        {hostelCardData.map((hostel, index) => {
          return (
            <Link href={`/`} key={index}>
              <div className="card card-compact lg:max-w-[400px] max-h-72 bg-base-100 shadow-xl overflow-hidden relative">
                <figure className="w-full h-full">
                  <img
                    src={hostel.image.src}
                    loading="lazy"
                    decoding="async"
                    alt="Hostels"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </figure>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <h2 className="bg-white py-1 px-2 lg:py-2 lg:px-3 text-rose-800 font-bold text-base lg:text-lg rounded-full">
                    {hostel.name}<span>
                      
                    </span>
                  </h2>
                  <p className="bg-white py-1 px-2 lg:py-2 lg:px-3 max-w-fit font-bold text-base lg:text-lg rounded-full">
                    {hostel.rating}
                  </p>
                  <p className="bg-white py-1 px-2 lg:py-2 lg:px-3 max-w-fit font-bold text-base lg:text-lg rounded-full">
                    Avg.{" "}
                    <span className="text-rose-800">{hostel.avgPrice}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
