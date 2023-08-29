"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
  {
    id: "meter",
    label: "Private meter",
  },
  {
    id: "kitchen",
    label: "Private kitchen",
  },
  {
    id: "bathhouse",
    label: "Private bathhouse",
  },
  {
    id: "toilet",
    label: "Private toilet",
  },
];

export function Filters() {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {items.map((item, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox id={item.id} />
          <label
            htmlFor={item.id}
            className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}
