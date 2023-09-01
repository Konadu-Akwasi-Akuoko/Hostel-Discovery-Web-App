"use client";
import React, { useEffect } from "react";
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
import { store } from "@/store/store";
import { selectUserData, setUserData } from "@/store/userSlice";
import { useSelector } from "react-redux";
import SignedInButton from "./SginedInButton";

export default function NavMenu() {
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  const userData = useSelector(selectUserData);

  // When ever we receive the data from the session
  useEffect(() => {
    // set the user state with the data
    store.dispatch(
      setUserData({
        name: session?.user?.name as string,
        image: session?.user?.image as string,
        email: session?.user?.email as string,
        loggedIn: true,
      })
    );
  }, [session]);

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
          <SignedInButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
