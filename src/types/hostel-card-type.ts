import { StaticImageData } from "next/image";

export type minimalHostelCardDataType = {
  image: StaticImageData;
  name: string;
  hostelRating: number;
  hostelDistanceToCampus: string;
};

export type featuredHostelRoomType = {
  image: StaticImageData;
  parentHostelName: string;
  hostelRoomName: string;
  hostelRoomRating: number;
  isSharedBathhouse: boolean;
  isSharedKitchen: boolean;
  personPerRoom: number;
  roomSize: number;
  price: number;
};
