import React from "react";

export default function Search() {
  return (
    <section className="mg-[5vw] lg:mx-[15vw] mb-16 px-6 border border-rose-200 rounded-lg">
      <p className=" py-4 border-b border-rose-200 font-medium">
        Find your next best hostel
      </p>
      <div className=" flex flex-col justify-center">
        <div className="flex flex-wrap flex-row justify-between my-8">
          {/* Type of hostel */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">
                Select the type of hostel you want
              </span>
            </label>
            <select
              className="select select-bordered"
              defaultValue="Type of hostel"
            >
              <option disabled>Type of hostel</option>
              <option>Budget</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          {/* No of students in a room */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">How many students in a room?</span>
            </label>
            <input
              type="text"
              placeholder="2 in a room..."
              className="input input-bordered w-full max-w-sm"
            />
          </div>
          {/* Price range */}
          <div className="form-control w-full max-w-sm">
            <label className="label">
              <span className="label-text">
                How much are you willing to pay per month?
              </span>
            </label>
            <input
              type="text"
              placeholder="300GHS per month"
              className="input input-bordered w-full max-w-sm"
            />
          </div>
        </div>

        <button className="btn mb-8 self-center w-1/5 bg-rose-700 hover:bg-rose-950 text-white">
          Search
        </button>
      </div>
    </section>
  );
}
