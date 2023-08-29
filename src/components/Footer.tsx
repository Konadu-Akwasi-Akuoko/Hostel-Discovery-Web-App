import React from "react";
import Breaker from "./Breaker";
import Link from "next/link";
import Logo from "@/assets/icons/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-3 border-t-2 py-10 border-tomato-6">
        <div className="horizontal-padding flex flex-col lg:flex-row flex-wrap gap-6 lg:gap-72">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <div className="flex flex-row">
                <Image src={Logo} alt="Logo" height={45} />
                <p className={`text-[--tomato-11] text-4xl font-bold`}>
                  phynda
                </p>
              </div>
              <div className="flex flex-col gap-1 py-1 pl-1">
                <p>&copy; {new Date().getFullYear()} phynda | AAMUSTED </p>
                <p>All rights reserved</p>
              </div>
            </Link>
          </div>
          {/* About Us */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-base">About Phynda</h4>
            <Link href={""} className="hover:underline">
              About Us
            </Link>
            <Link href={""} className="hover:underline">
              Contact Us
            </Link>
            <Link href={""} className="hover:underline">
              Trust & Safety
            </Link>
          </div>
          {/* Explore */}
          <div className="flex flex-col gap-3 text-sm">
            <h4 className="font-bold text-base">Explore Phynda</h4>
            <Link href={""} className="hover:underline">
              Hostels
            </Link>
            <Link href={""} className="hover:underline">
              Rooms
            </Link>
            <Link href={""} className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
