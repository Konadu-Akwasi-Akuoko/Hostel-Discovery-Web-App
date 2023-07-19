import { cn } from "@/lib/utils";
import { featuredHostelRoomType } from "@/types/hostel-card-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HighlyRatedRoomCard({
  image,
  parentHostelName,
  hostelRoomName: name,
  hostelRoomRating,
  isSharedBathhouse,
  isSharedKitchen,
  personPerRoom,
  roomSize,
  price,
  className,
}: featuredHostelRoomType & { className?: string }) {
  return (
    <Link href={""}>
      <div
        className={cn(
          "w-full h-full bg-white rounded-lg overflow-hidden border border-tomato-6 shadow-xl",
          className
        )}
      >
        <div>
          <Image src={image} alt="hostel image" />
        </div>
        <div className="p-5 flex flex-col gap-y-3">
          {/* Name and parent hostel name  */}
          <div>
            <p className="font-bold text-lg text-tomato-11 mb-4">
              {name}, {parentHostelName}
            </p>
          </div>
          {/* Hostel room rating   */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              fill="currentColor"
              className="w-4 h-4 fill-tomato-12"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <p>{hostelRoomRating}/5 stars</p>
          </div>
          {/* isSharedBathhouse  */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358a4.09 4.09 0 0 0-1.38 1.774a4.179 4.179 0 0 0-.02 3.107a.75.75 0 0 0 .995.413l5.96-2.566a.75.75 0 0 0 .402-.963a3.973 3.973 0 0 0-2.132-2.213a3.843 3.843 0 0 0-2.466-.192l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652a.745.745 0 0 0-.039.068l-1 2a.75.75 0 0 0 1.342.67l.968-1.935a7.358 7.358 0 0 0 2.58.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045c.662 0 1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.358 7.358 0 0 0 2.58-.765l.968 1.936a.75.75 0 0 0 1.342-.671l-1-2a.796.796 0 0 0-.038-.068c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a1.752 1.752 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5H3.5V4.135Z"
              />
            </svg>
            {isSharedBathhouse ? (
              <p>Shared bathhouse</p>
            ) : (
              <p>Private bathhouse</p>
            )}
          </div>
          {/* kitchen */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M240 144a96 96 0 1 0-192 0a96 96 0 1 0 192 0zm44.4 32c-14.5 64.1-71.9 112-140.4 112C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112h71.8c8.8-9.8 21.6-16 35.8-16h104c26.5 0 48 21.5 48 48s-21.5 48-48 48H392c-14.2 0-27-6.2-35.8-16h-71.8zM144 80a64 64 0 1 1 0 128a64 64 0 1 1 0-128zm256 160c13.3 0 24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h96v-8c0-13.3 10.7-24 24-24zM288 464V352h224v112c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zM48 320h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16v32h16zM24 464h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
              />
            </svg>
            {isSharedKitchen ? <p>Shared kitchen</p> : <p>Private kitchen</p>}
          </div>
          {/* person pre room */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7Z"
              />
            </svg>
            <p>{personPerRoom} per room</p>
          </div>
          {/* room size */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9 5a7 7 0 0 1 7 7h1v3h-1v4H9a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 3a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m8 9h5v4h-2v-2h-3v-2Z"
              />
            </svg>
            <div>{roomSize} sq ft</div>
          </div>
          {/* price */}
          <div className="flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m16.137 4.728l1.83 1.83C20.655 9.248 22 10.592 22 12.262c0 1.671-1.345 3.015-4.034 5.704C15.277 20.657 13.933 22 12.262 22c-1.67 0-3.015-1.345-5.704-4.034l-1.83-1.83c-1.545-1.545-2.318-2.317-2.605-3.32c-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302c.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45c1.003.288 1.775 1.061 3.32 2.606Zm-4.99 9.6c-.673-.672-.668-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5a.88.88 0 0 0-.609.277c-.387.387-.286.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.005-.177c.673.673.668 1.639.265 2.404a.75.75 0 0 1-1.04 1.045a2.201 2.201 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266c.387-.388.286-.775.177-.884c-.11-.109-.497-.21-.884.177c-.784.784-2.138 1.044-3.005.176Zm-1.126-4.035a2 2 0 1 0-2.829-2.828a2 2 0 0 0 2.829 2.828Z"
                clipRule="evenodd"
              />
            </svg>
            <p>₵{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
