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
  isSharedBathhouse: boolean;
  isSharedKitchen: boolean;
  personPerRoom: number;
  price: number;
};
