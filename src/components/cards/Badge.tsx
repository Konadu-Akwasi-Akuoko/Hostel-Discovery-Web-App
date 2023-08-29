import React, { ReactNode } from "react";

export default function Badge({
  bgColor,
  children,
}: {
  bgColor: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-row items-center gap-1 rounded-lg py-2 px-4 ${bgColor}`}
    >
      {children}
    </div>
  );
}
