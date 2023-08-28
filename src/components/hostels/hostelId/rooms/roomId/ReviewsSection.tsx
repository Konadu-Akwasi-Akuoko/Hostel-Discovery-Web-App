import ReviewCard from "@/components/cards/ReviewCard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { reviewMessages } from "@/data/mockup-data/reviewData";
import Image from "next/image";
import React from "react";
import AddYourComment from "../AddYourComment";

export default function ReviewsSection() {
  return (
    <div className="">
      {/* Reviews and heading */}
      <div className="flex flex-wrap flex-row items-center gap-2 text-2xl font-semibold mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
          />
        </svg>
        <p>4.81</p>
        <p className="-mt-2">.</p>
        <p>149 review</p>
      </div>
      {/* Human details and what they are saying */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* card review */}
        {reviewMessages
          .slice(0, 4)
          .map(({ authorName, dateOfReview, authorMessage }, index) => {
            return (
              <ReviewCard
                key={index}
                authorName={authorName}
                dateOfReview={dateOfReview}
                authorMessage={authorMessage}
              />
            );
          })}
        {/* Show All button */}
      </div>
      {/* Add your review */}
      <AddYourComment />
      <div className="mt-8">
        <Button variant={"tomato-outline"}>Show all 10 reviews</Button>
      </div>
    </div>
  );
}
