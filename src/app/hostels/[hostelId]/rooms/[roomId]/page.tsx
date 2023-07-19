import React from "react";

export default function RoomId({ params }: { params: { roomId: string } }) {
  // Use useSearchParams to get the hostel ID from the URL
  return <div>Hostel Room: {params.roomId} </div>;
}
