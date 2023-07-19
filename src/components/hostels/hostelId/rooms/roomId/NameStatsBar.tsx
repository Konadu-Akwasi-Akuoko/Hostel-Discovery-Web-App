import React from "react";

export default function NameStatsBar() {
  return (
    <div className="mt-6">
      {/* Top bar with name, starts, number of review, location, share and save buttons */}
      <h1 className="text-2xl">Atwima Hostel</h1>
      <div className="flex flex-row text-sm justify-between mt-2">
        {/* Rating, Number of Reviews,Location */}
        <div className="flex flex-row items-end">
          {/* Rating */}
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
            <p>4.5</p>
          </div>
          {/* Dot between */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z"
              />
            </svg>
          </div>
          {/* Number of reiviews, link to reviews section */}
          <div>
            <p className="underline">13 reviews</p>
          </div>
          {/* Dot between */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z"
              />
            </svg>
          </div>
          {/* Location */}
          <div>
            <p className="underline">Tanoso, Kumasi</p>
          </div>
        </div>
        {/* Share and Save buttons  */}
        <div className="flex flex-row gap-x-2 items-center">
          {/* Share */}
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40m160-64l-80-80l-80 80m80 193V48"
              />
            </svg>
            <p className="underline">Share</p>
          </div>
          {/* Save */}
          <div className="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
              />
            </svg>
            <p className="underline">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}
