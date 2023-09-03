import { store } from "@/store/store";
import { selectUserData, setUserData } from "@/store/userSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import getUser from "@/lib/getUser";
import { client } from "@/contracts/client";

export default function SignedInButton() {
  const pathname = usePathname();
  const { name, email, image, loggedIn } = useSelector(selectUserData);
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  // When ever we receive the data from the session
  useEffect(() => {
    // set the user state with the data
    store.dispatch(
      setUserData({
        name: session?.user?.name as string,
        image: session?.user?.image as string,
        email: session?.user?.email as string,
        loggedIn: status == "authenticated" ? true : false,
      })
    );
    if (loggedIn) {
      // Check to see if the user details is in the database
      const checkDataInDB = async () => {
        // Use the fetch api here but if you have a component that needs data use the rtk query
        const { body, status } = await client.getUser({
          body: {
            name: name,
            picture: image,
            email: email,
          },
        });
        if (status == 201) {
          console.log(body);
        }
      };

      checkDataInDB();
    }
  }, [session, status, loggedIn]);

  return (
    <>
      {/* If logged in show the google image, otherwise show the login button */}
      {session ? (
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-tomato-8">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                width={36}
                height={36}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Add a hostel</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`/api/auth/signout?callback=${pathname}`}>
                  Sign out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link
          href={`/api/auth/signin?callback=${pathname}`}
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-tomato-1 text-tomato-11 px-4 py-2 font-medium transition-colors hover:bg-tomato-3 hover:text-tomato-11 focus:bg-tomato-4 focus:text-tomato-12 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50 text-base"
        >
          Sign In
        </Link>
      )}
    </>
  );
}
