import React from "react";
import SelectFromComboBox from "../SelectFromComboBox";

export default function Search() {
  return (
    <section className="mx-[5vw] lg:mx-[15vw] mb-16 px-6 border border-tomato-6 rounded-lg">
      <p className=" py-4 border-b border-tomato-6 font-medium">
        Find your next best hostel
      </p>
      <div className=" flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row flex-wrap gap-y-6 justify-between my-8">
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            defaultMessage={"Select A Price Rance"}
          />
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            defaultMessage={"Select A Price Rance"}
          />{" "}
          <SelectFromComboBox
            className="w-full lg:w-[30%]"
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            defaultMessage={"Select A Price Rance"}
          />
        </div>

        <button className="btn mb-8 self-center w-1/5 bg-rose-700 hover:bg-rose-950 text-white">
          Search
        </button>
      </div>
    </section>
  );
}
