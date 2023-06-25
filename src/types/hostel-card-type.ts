import { StaticImageData } from "next/image";

export type hostelCardDataType = {
  image: StaticImageData;
  name: string;
  rating: number;
  avgPrice: string;
}[];
