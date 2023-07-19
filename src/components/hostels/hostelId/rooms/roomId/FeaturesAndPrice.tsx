import SmFeatureCard from "@/components/cards/SmFeatureCard";
import React from "react";

export default function FeatureAndPrice() {
  return (
    <div className="mt-12">
      {/* Features */}
      <div className="w-full lg:w-[65%]">
        {/* Featured featured */}
        <div className="grid grid-cols-3 gap-4">
          <SmFeatureCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="32"
                d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z"
              />
              <circle
                cx="256"
                cy="192"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="32"
              />
            </svg>
            <p className="text-sm">4km to campus</p>
          </SmFeatureCard>
          <SmFeatureCard>
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
            <p className="text-sm">4.5/5</p>
          </SmFeatureCard>
          <SmFeatureCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"
              />
            </svg>
            <p className="text-sm">Private Kitchen</p>
          </SmFeatureCard>{" "}
        </div>
      </div>
      {/* Price Card */}
      <div className="w-full lg:w-[30%]"></div>
    </div>
  );
}
