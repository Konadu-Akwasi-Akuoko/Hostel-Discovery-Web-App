import home1 from "@/assets/images/home1.jpg";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";
import home5 from "@/assets/images/home5.jpg";
import hostel1 from "@/assets/images/hostel-room_1.jpg";
import hostel2 from "@/assets/images/hostel-room_2.jpg";
import hostel3 from "@/assets/images/hostel-room_3.jpg";
import hostel4 from "@/assets/images/hostel-room_4.jpg";
import hostel5 from "@/assets/images/hostel-room_5.jpg";

import {
  featuredHostelRoomType,
  minimalHostelCardDataType,
} from "@/types/hostel-card-type";

export const hostelCardData_6: minimalHostelCardDataType[] = [
  {
    image: home1,
    name: "Atwima Hostel",
    hostelRating: 4,
    hostelDistanceToCampus: "300",
  },
  {
    image: home2,
    name: "Serwaa Hostel",
    hostelRating: 2,
    hostelDistanceToCampus: "400",
  },
  {
    image: home3,
    name: "Ataa Hostel",
    hostelRating: 5,
    hostelDistanceToCampus: "500",
  },
  {
    image: home4,
    name: "Autonomy Hostel",
    hostelRating: 3,
    hostelDistanceToCampus: "600",
  },
  {
    image: home5,
    name: "Boakye Hostel",
    hostelRating: 4,
    hostelDistanceToCampus: "700",
  },
  {
    image: home3,
    name: "Yaa Ataa Hostel",
    hostelRating: 5,
    hostelDistanceToCampus: "500",
  },
];

export const hostelCardData_4: minimalHostelCardDataType[] = [
  {
    image: home1,
    name: "Atwima Hostel",
    hostelRating: 4,
    hostelDistanceToCampus: "300",
  },
  {
    image: home2,
    name: "Serwaa Hostel",
    hostelRating: 2,
    hostelDistanceToCampus: "400",
  },
  {
    image: home3,
    name: "Ataa Hostel",
    hostelRating: 5,
    hostelDistanceToCampus: "500",
  },
  {
    image: home4,
    name: "Autonomy Hostel",
    hostelRating: 3,
    hostelDistanceToCampus: "600",
  },
];

export const featuredHostelRoom_6: featuredHostelRoomType[] = [
  {
    image: hostel1,
    parentHostelName: "Atwima Hostel",
    hostelRoomName: "Superior Room",
    hostelRoomRating: 4,
    isSharedBathhouse: false,
    isSharedKitchen: true,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
  {
    image: hostel2,
    parentHostelName: "Serwaa Hostel",
    hostelRoomName: "Superior Twin Room",
    hostelRoomRating: 4,
    isSharedBathhouse: false,
    isSharedKitchen: false,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
  {
    image: hostel3,
    parentHostelName: "Ataa Hostel",
    hostelRoomName: "Deluxe Room",
    hostelRoomRating: 4,
    isSharedBathhouse: true,
    isSharedKitchen: false,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
  {
    image: hostel4,
    parentHostelName: "Autonomy Hostel",
    hostelRoomName: "Standard Double Room",
    hostelRoomRating: 4,
    isSharedBathhouse: false,
    isSharedKitchen: true,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
  {
    image: hostel5,
    parentHostelName: "Serwaa Hostel",
    hostelRoomName: "Executive Suite",
    hostelRoomRating: 4,
    isSharedBathhouse: false,
    isSharedKitchen: true,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
  {
    image: hostel2,
    parentHostelName: "Ataa Hostel",
    hostelRoomName: "Junior Suite",
    hostelRoomRating: 4,
    isSharedBathhouse: false,
    isSharedKitchen: false,
    personPerRoom: 2,
    roomSize: 250,
    price: 1600,
  },
];
