import Image from "next/image";
import React from "react";
import Logo from "@/assets/icons/logo.png";
import { ubuntu } from "@/utils/fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="horizontal-padding navbar justify-between">
        {/* The logo and name */}
        <Link href={"/"}>
          <div className="flex flex-row">
            <Image src={Logo} alt="Logo" height={45} />
            <p
              className={`${ubuntu.className} text-rose-700 text-4xl font-bold`}
            >
              phynda
            </p>
          </div>
        </Link>

        {/* Nav menu */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <Link href={"/"}>Favorites</Link>
            </li>
            <li>
              <Link href={"/"}>Sign In</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex-1 w-full h-1 border-b border-slate-300"></div>
    </>
  );
}
