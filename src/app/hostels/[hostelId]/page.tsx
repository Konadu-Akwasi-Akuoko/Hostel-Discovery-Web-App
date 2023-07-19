import React from "react";

export default function HostelId({ params }: { params: { hostelId: string } }) {
  return <div>Hostel ID: {params.hostelId} </div>;
}
