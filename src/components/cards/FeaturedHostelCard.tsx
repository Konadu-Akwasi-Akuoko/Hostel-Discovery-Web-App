import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function FeaturedHostelCard({
  hostelImg,
  hostelName,
  hostelDistanceToCampus,
  hostelRating,
  className,
}: {
  hostelImg: any;
  hostelName: string;
  hostelDistanceToCampus: string;
  hostelRating: number;
  className?: string;
}) {
  return (
    <div className={cn("w-1/2", className)}>
      <div className="rounded-lg overflow-hidden shadow-xl mb-3 h-72">
        <Image
          src={hostelImg}
          alt="hostel"
          height={280}
          style={{ width: "100%", height: "288px", objectFit: "cover" }}
          className="bg-tomato-3"
        />
      </div>
      <div className="flex flex-col gap-y-1">
        {/* Name and rating */}
        <div className="flex flex-row justify-between">
          <h3 className="text-lg">{hostelName}</h3>
          <div className="flex flex-row gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 fill-tomato-12"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg">{hostelRating}</p>
          </div>
        </div>
        {/* Distance to campus */}
        <div className="flex flex-row gap-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-slate-9"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-slate-11">{hostelDistanceToCampus} to Campus</p>
        </div>
      </div>
    </div>
  );
}
