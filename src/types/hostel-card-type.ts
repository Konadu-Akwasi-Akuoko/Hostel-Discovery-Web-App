import { StaticImageData } from "next/image";

export type hostelCardDataType = {
  image: StaticImageData;
  name: string;
  hostelRating: number;
  hostelDistanceToCampus: string;
}[];
