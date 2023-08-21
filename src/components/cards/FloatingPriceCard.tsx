import React from "react";
import { Button } from "../ui/button";

export default function FloatingPriceCard() {
  return (
    <div className="w-full lg:w-[30%] relative mt-8 lg:mt-0 lg:sticky lg:top-12 h-fit">
      <div className="bg-slate-1 p-6 border border-tomato-5 shadow-xl rounded-lg">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-2xl font-semibold">₵960</p>
            <p className="text-sm text-slate-10 font-light">
              Per individual person
            </p>
          </div>
          <div className="flex flex-row">
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
            <p className="text-sm">4.5</p>
            {/* dot between */}
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
            <p className="text-sm text-slate-10">149 reviews</p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-12">
          <Button variant={"tomato"} className="w-full">
            Rent This Room
          </Button>
        </div>
      </div>
      {/* Meet Your Hostel Manager Card */}
      <div>
        <div className="mt-10 mb-8">
          <h3 className="mb-6">Meet your manager</h3>
          {/* Manager Picture and Stats */}
          <div className=" flex flex-row gap-10 items-center flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-slate-8 flex flex-wrap justify-center content-center rounded-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 12 12"
                >
                  <path
                    fill="currentColor"
                    d="M6 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm2.5 5h-5A1.5 1.5 0 0 0 2 7.5c0 1.116.459 2.01 1.212 2.615C3.953 10.71 4.947 11 6 11c1.053 0 2.047-.29 2.788-.885C9.54 9.51 10 8.616 10 7.5A1.5 1.5 0 0 0 8.5 6Z"
                  />
                </svg>
                {/* Verified Badge */}
                <div className="w-6 h-6 absolute bottom-4 -right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#e54d2e"
                      d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m3.05-5l-3.08-1.85L8.9 16l.81-3.5L7 10.16l3.58-.31l1.39-3.3l1.4 3.29l3.58.31l-2.72 2.35l.82 3.5"
                    />
                  </svg>
                </div>
              </div>
              {/* Manager Name, First name only */}
              <p className="text-xl font-semibold mt-4">Kombat</p>
            </div>
            {/* Manger Stats */}
            <div className="grow">
              <div>
                <p className="text-xl font-semibold flex flex-row gap-2 items-center">
                  423
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 14h2.45l5.9-5.85q.15-.15.15-.375t-.15-.375L12.6 5.65q-.15-.15-.375-.15t-.375.15L6 11.55V14Zm4.5 0H18v-2h-5.5l-2 2ZM2 22V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-4 4Z"
                    />
                  </svg>
                </p>
                <p className="text-sm">Reviews</p>
              </div>
              <div className="h-[1px] w-full my-3 bg-slate-7"></div>
              <div>
                <p className="text-xl font-semibold flex flex-row gap-2 items-center">
                  4.74
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                    />
                  </svg>
                </p>
                <p className="text-sm">Ratings</p>
              </div>
              <div className="h-[1px] w-full my-3 bg-slate-7"></div>
              <div>
                <p className="text-xl font-semibold flex flex-row gap-2 items-center">
                  10
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z"
                    />
                  </svg>
                </p>
                <p className="text-sm">Years Managing</p>
              </div>
              <div className="h-[1px] w-full my-3 bg-slate-7"></div>
            </div>
          </div>
        </div>
        {/* Manager Words */}
        <div className="mb-8">
          <p>
            Lucky Ranch is an experience horse ranch with all the services that
            are available for outdoor activities, dining, and hosting.
          </p>
        </div>
        {/* Message button */}
        <Button>Message Manager</Button>
      </div>
      {/* Breaker */}
      <div className="h-[1px] w-full my-6 bg-slate-7"></div>
      <p className="text-slate-11 text-sm">
        To protect yourself always deal with verified hostel managers. Always
        look out for the red verification badge on a manager&apos;s picture,
        that show he&apos;s verified.
      </p>
    </div>
  );
}
