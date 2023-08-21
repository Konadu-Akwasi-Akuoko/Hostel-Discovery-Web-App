// ! Inspiration Airbnb: https://www.airbnb.com/rooms/9386477?adults=1&category_tag=Tag%3A8225&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=flex_destinations_search&check_in=2023-12-16&check_out=2023-12-21&source_impression_id=p3_1689792503_L6GnMWuS4dWkIUh0&previous_page_section_name=1000&federated_search_id=8353e899-6073-422f-b883-c596a38b67c2
import PictureSection from "@/components/hostels/hostelId/rooms/roomId/PicturesSection";
import AboutRoom from "@/components/hostels/hostelId/rooms/roomId/AboutRoom";
import FeatureAndPrice from "@/components/hostels/hostelId/rooms/roomId/FeaturesAndPrice";
import NameStatsBar from "@/components/hostels/hostelId/rooms/roomId/NameStatsBar";
import Reviews from "@/components/hostels/hostelId/rooms/roomId/ReviewsSection";
import React from "react";
import { Button } from "@/components/ui/button";

export default function RoomId({ params }: { params: { roomId: string } }) {
  // Use useSearchParams or useRouter(preferred) to to get the hostel ID from the URL
  return (
    <main className="horizontal-padding">
      {/* Top bar with name, starts, number of review, location, share and save buttons */}
      <NameStatsBar />
      <PictureSection />
      <div className="mt-12 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[65%]">
          <FeatureAndPrice />
          <AboutRoom />
          <Reviews />
        </div>
        {/* Floating Price Card */}
        <div className="w-full lg:w-[30%] relative mt-8 lg:mt-0 lg:sticky lg:top-12 h-fit">
          <div className="bg-white p-6 border border-tomato-5 shadow-xl rounded-lg">
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
        </div>
      </div>
    </main>
  );
}
