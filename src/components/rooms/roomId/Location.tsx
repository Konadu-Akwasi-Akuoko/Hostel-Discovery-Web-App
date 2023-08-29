import Breaker from "@/components/Breaker";
import React from "react";

export default function Location() {
  return (
    <div>
      <Breaker />
      <h3 className="mb-4">Where you will be</h3>
      <div className="w-full h-80 bg-slate-2">Google Map data</div>
    </div>
  );
}
