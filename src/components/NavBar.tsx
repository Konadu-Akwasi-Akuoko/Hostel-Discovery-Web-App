import Image from "next/image";
import React from "react";
import Logo from "@/assets/icons/logo.png";
import { ubuntu } from "@/utils/fonts";

export default function NavBar() {
  return (
    <header className="horizontal-padding py-6">
      {/* The logo and name */}
      <div className="flex flex-row">
        <Image src={Logo} alt="Logo" height={45} />
        <p className={`${ubuntu.className} text-4xl font-bold`}>phynda</p>
      </div>
    </header>
  );
}
