import React from "react";

export default function MdFeatureCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row items-start gap-6 px-4 py-6">{children}</div>
  );
}
