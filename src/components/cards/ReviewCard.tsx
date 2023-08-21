import { ReviewCardType } from "@/types/reviewCard-type";
import React from "react";

export default function ReviewCard({
  authorImage,
  authorName,
  dateOfReview,
  authorMessage,
}: ReviewCardType) {
  return (
    <div>
      {/* Name, Picture, and Date of Review */}
      <div className="flex flex-row gap-3 mb-2">
        {/* Image */}
        <div className="w-10 h-10 bg-slate-8 flex flex-wrap justify-center content-center rounded-full">
          {authorImage ? (
            <div>{/* Some Image here */}</div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6Z"
              />
            </svg>
          )}
        </div>
        {/* Name and Date of Update */}
        <div className="flex flex-col">
          <p className="font-semibold">{authorName}</p>
          <p className="text-sm font text-slate-11">{dateOfReview}</p>
        </div>
      </div>
      {/* Actual review */}
      <div>
        {/* Not more than 200 characters */}
        <p>{authorMessage}</p>
      </div>
    </div>
  );
}
