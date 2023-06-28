import React from "react";
import SelectFromComboBox from "../SelectFromComboBox";
import { Button } from "../ui/button";

export default function Search() {
  return (
    <section className="mx-[5vw] lg:mx-[15vw] mb-16 px-6 pb-6 border border-tomato-6 rounded-lg">
      <p className=" py-4 border-b border-tomato-6 font-medium">
        Find your next best hostel
      </p>
      <div className=" flex flex-col">
        <div className="flex flex-col lg:flex-row flex-wrap gap-y-6 justify-between my-8">
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            defaultMessage={"Price Rance"}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
          />
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            defaultMessage={"Distance From Campus"}
            options={[
              { value: "short", label: "Short" },
              { value: "medium", label: "Medium" },
              { value: "long", label: "Long" },
            ]}
          />
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            defaultMessage={"Students Per Room"}
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
              { value: "three", label: "Three" },
              { value: "four", label: "Four" },
              { value: "five", label: "Five" },
            ]}
          />
        </div>
        <Button variant={"tomato"} className="w-3/12 self-center">
          Search
        </Button>
      </div>
    </section>
  );
}
