import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Filters } from "./Filters";
import { Button } from "../ui/button";

export default function AsideSearch() {
  return (
    <aside className="w-full lg:w-1/5 relative mt-8 lg:mt-0 lg:sticky lg:top-12 h-fit">
      {/* Search */}
      <div className="flex flex-col gap-2 mb-6">
        <Label htmlFor="roomName" className="text-xl font-normal">
          Search by room name
        </Label>
        <Input
          placeholder="Name of room..."
          id="roomName"
          className=" bg-slate-2 dark:bg-slate-2 dark:focus-visible:ring-tomato-8 focus-visible:ring-tomato-8"
        />
      </div>
      <div>
        <p className="text-xl">Filter by...</p>
        <Filters />
      </div>
      <Button variant={"tomato"} className="w-3/4 mt-6">
        Search
      </Button>
    </aside>
  );
}
