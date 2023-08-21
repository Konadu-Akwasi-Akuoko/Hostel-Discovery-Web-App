// ! Inspiration Airbnb: https://www.airbnb.com/rooms/9386477?adults=1&category_tag=Tag%3A8225&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-12-16&check_out=2023-12-21&source_impression_id=p3_1689792503_L6GnMWuS4dWkIUh0&previous_page_section_name=1000&federated_search_id=8353e899-6073-422f-b883-c596a38b67c2
import PictureSection from "@/components/hostels/hostelId/rooms/roomId/PicturesSection";
import AboutRoom from "@/components/hostels/hostelId/rooms/roomId/AboutRoom";
import FeatureAndPrice from "@/components/hostels/hostelId/rooms/roomId/FeaturesAndPrice";
import NameStatsBar from "@/components/hostels/hostelId/rooms/roomId/NameStatsBar";
import Reviews from "@/components/hostels/hostelId/rooms/roomId/Reviews";
import React from "react";

export default function RoomId({ params }: { params: { roomId: string } }) {
  // Use useSearchParams or useRouter(preferred) to to get the hostel ID from the URL
  return (
    <main className="horizontal-padding">
      {/* Top bar with name, starts, number of review, location, share and save buttons */}
      <NameStatsBar />
      <PictureSection />
      <FeatureAndPrice />
      <AboutRoom />
      <Reviews />
    </main>
  );
}
