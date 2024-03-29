import Breaker from "@/components/Breaker";
import MdFeatureCard from "@/components/cards/MdFeatureCard";
import SmFeatureCard from "@/components/cards/SmFeatureCard";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Features() {
  return (
    <>
      {/* <div className="mt-12 flex flex-col lg:flex-row justify-between"> */}
      {/* Features */}
      {/* <div className="w-full lg:w-[65%]"> */}
      {/* Featured features */}
      <div className="grid grid-cols-3 gap-4">
        <SmFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
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
              strokeWidth="32"
            />
          </svg>
          <p className="text-sm">11mins Walk</p>
        </SmFeatureCard>
        <SmFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M304 384v-24c0-29 31.54-56.43 52-76c28.84-27.57 44-64.61 44-108c0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108c20.35 19.21 52 46.7 52 76v24m16 96h64m-80-48h96m-48-48V256"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M294 240s-21.51 16-38 16s-38-16-38-16"
            />
          </svg>
          <p className="text-sm">Shared Meter</p>
        </SmFeatureCard>
        <SmFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03L22 9.24Z"
            />
          </svg>
          <p className="text-sm">4.5/5 Stars</p>
        </SmFeatureCard>
      </div>
      {/* Breaker */}
      <Breaker />
      {/* Other features */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <MdFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154"
            />
          </svg>
          <div>
            <p className="font-bold mb-1">5 people per room</p>
            <p className="text-sm text-slate-10">
              Live with 5 people inside a comfy room
            </p>
          </div>
        </MdFeatureCard>
        <MdFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 13.5A6.5 6.5 0 0 0 13.5 7H.5A6.5 6.5 0 0 0 7 13.5ZM7.5 5l3-4.5M9 5.5l3.5-3"
            />
          </svg>
          <div>
            <p className="font-bold mb-1">Shared Kitchen</p>
            <p className="text-sm text-slate-10">
              Share a spacious kitchen with your colleagues
            </p>
          </div>
        </MdFeatureCard>
        <MdFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M12 20.5c.65 0 1.364-.017 2.098-.044c.258-.01.386-.015.607-.037c3.278-.332 6.072-3.234 6.28-6.521c.015-.222.015-.42.015-.815c0-.077 0-.116-.002-.148a1 1 0 0 0-.933-.933c-.033-.002-.07-.002-.148-.002M4.083 12c-.077 0-.115 0-.148.002a1 1 0 0 0-.933.933c-.002.032-.002.07-.002.148c0 .395 0 .593.014.815c.18 2.844 2.296 5.4 4.986 6.252M6 20l-1 2m13-2l1 2M2 12h12m8 0h-4"
              />
              <path
                fill="currentColor"
                d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l.696-.28l-.696.28Zm.379.947l.328.674l-.328-.674ZM6.362 6.192l.695.283l-.695-.283Zm4.215-1.814l-.295.69l.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413l-.296-.688Zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964l-.698.274ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.153-.607l.38.948l1.392-.557l-.379-.948l-1.393.557Zm.14 4.689a2.679 2.679 0 0 1 .014-1.992l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566l-.592-1.377Zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.476a2.565 2.565 0 0 1 1.25-1.354l-.656-1.348A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.354a2.361 2.361 0 0 1 1.975-.053l.59-1.38a3.861 3.861 0 0 0-3.221.085l.656 1.348Z"
              />
            </g>
          </svg>
          <div>
            <p className="font-bold mb-1">Private Bathhouse</p>
            <p className="text-sm text-slate-10">
              Get your own private bathhouse
            </p>
          </div>
        </MdFeatureCard>
        <MdFeatureCard>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 22h8v-2.5c2.41-1.63 4-4.38 4-7.5V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H3c0 3.09 2 6 6 7.5V22m-3.71-8h13.42A7.017 7.017 0 0 1 15 18.33V20h-4v-1.67C9 18 5.86 15.91 5.29 14M15 4h4v8h-4V4m1 1v3h2V5h-2Z"
            />
          </svg>
          <div>
            <p className="font-bold mb-1">Shared Toilet</p>
            <p className="text-sm text-slate-10">
              Share the neat toilet facilities with your colleagues
            </p>
          </div>
        </MdFeatureCard>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
