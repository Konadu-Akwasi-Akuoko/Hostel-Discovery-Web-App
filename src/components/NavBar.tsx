import Image from "next/image";
import React from "react";
import Logo from "@/assets/icons/logo.png";
import { ubuntu } from "@/utils/fonts";
import Link from "next/link";
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    <>
      <header className="horizontal-padding flex flex-row py-6 justify-between">
        {/* The logo and name */}
        <Link href={"/"}>
          <div className="flex flex-row">
            <Image src={Logo} alt="Logo" height={45} />
            <p
              className={`${ubuntu.className} text-[--tomato-11] text-4xl font-bold`}
            >
              phynda
            </p>
          </div>
        </Link>

        {/* Nav menu */}
        <NavMenu />
      </header>
      <div className="flex-1 w-full h-1 border-b border-slate-6"></div>
    </>
  );
}
