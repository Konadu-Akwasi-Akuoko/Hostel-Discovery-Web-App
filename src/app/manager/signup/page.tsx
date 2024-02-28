import Image from "next/image";
import React from "react";
import hostelMangerImg from "@/assets/images/HostelManger.jpg";
import { Button } from "@/components/ui/button";
import ManagerForm from "@/components/manager/signup/ManagerForm";

export default function SignUp() {
  return (
    <main className="horizontal-padding my-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-[45%] rounded-lg overflow-hidden">
          <Image
            src={hostelMangerImg}
            alt="Hostel Manger Image from pexels: Photo by Ketut Subiyanto: https://www.pexels.com/photo/cheerful-black-businessman-talking-on-smartphone-in-park-4559516/ "
          />
        </div>
        <div className="lg:w-[45%] mt-6 lg:mt-0 flex flex-col gap-6">
          <h1>Become a hostel manager and share your hostels</h1>
          <p>
            By signing up to become a hostel manager you get a privilege to also
            add your hostels to the hostels on phynda. Let all students know
            that you also have some of the best rooms on campus.
          </p>
          <Button variant={"tomato"} className="w-fit">
            <a href="#sign-up"> Sign Up Now</a>
          </Button>
        </div>
      </div>
      <ManagerForm />
    </main>
  );
}
