import React from "react";

export default function Reviews() {
  return (
    <div className="w-[65%]">
      {/* Reviews and heading */}
      <div className="flex flex-wrap flex-row items-center gap-2 text-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
          />
        </svg>
        <p>4.81</p>
        <p className="-mt-2">.</p>
        <p>149 review</p>
      </div>
      {/* Human details and what they are saying */}
    </div>
  );
}
