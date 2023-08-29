import Content from "@/components/hostels/hostelId/Content";
import React from "react";

export default function HostelId({ params }: { params: { hostelId: string } }) {
  return (
    <main className="horizontal-padding">
      <Content />
    </main>
  );
}
