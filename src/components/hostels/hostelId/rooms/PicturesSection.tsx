import Image from "next/image";
import React from "react";
import roomPic1 from "@/assets/images/hostel-room_1.jpg";
import roomPic2 from "@/assets/images/hostel-room_2.jpg";
import roomPic3 from "@/assets/images/hostel-room_3.jpg";
import { Button } from "@/components/ui/button";
// import roomPic4 from "@/assets/images/hostel-room_4.jpg";
// import roomPic5 from "@/assets/images/hostel-room_5.jpg";

export default function PictureSection() {
  return (
    <div className="pt-6 rounded-lg overflow-hidden relative">
      <div className="flex flex-row gap-1 h-[280px] lg:h-[560px] rounded-lg overflow-hidden">
        {/* Half pic on desktop, full on mobile */}
        <div className="w-full lg:w-1/2h-[280px] lg:h-[560px]">
          <Image
            src={roomPic1}
            alt="room picture"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        {/* 2 pics on desktop, no pic on mobile */}
        <div className="hidden lg:flex flex-col gap-1 w-full">
          <div className="h-[49.5%]">
            <Image
              src={roomPic2}
              alt="room picture"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
          <div className="h-1/2">
            <Image
              src={roomPic3}
              alt="room picture"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* Show more photos button */}
      <div className="absolute bottom-5 right-5">
        <Button variant={"secondary"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            className="mr-1"
          >
            <path
              fill="currentColor"
              d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12ZM60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
            />
          </svg>
          <p className="text-sm">Show all photos</p>
        </Button>
      </div>
    </div>
  );
}
