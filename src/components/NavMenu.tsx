"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyleT,
} from "./ui/navigation-menu";
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function NavMenu() {
  const { data } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ThemeButton />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyleT() + " text-base"}
            >
              Favorites
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={"/api/auth/signin"} legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyleT() + " text-base"}
            >
              Sign In
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
