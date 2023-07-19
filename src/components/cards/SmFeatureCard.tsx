import React from "react";

export default function SmFeatureCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 border border-tomato-6 rounded-lg px-4 py-6">
      {children}
    </div>
  );
}
