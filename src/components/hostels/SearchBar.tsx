import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchBar() {
  return (
    <div className="flex flex-row gap-6">
      <Input
        type="text"
        placeholder="Search for a hostel's name..."
        className=" bg-slate-2 dark:bg-slate-2 dark:focus-visible:ring-tomato-8 focus-visible:ring-tomato-8"
      />
      <Button variant={"tomato"}>Search</Button>
    </div>
  );
}
