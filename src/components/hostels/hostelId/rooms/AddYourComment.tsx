"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React from "react";

export default function AddYourComment() {
  return (
    <div className="mt-8 w-3/4">
      <Label htmlFor="reviewMessage" className="font-bold mb-3">
        Submit a review
      </Label>
      <Textarea
        placeholder="What do you think about this hostel..."
        id="reviewMessage"
      />
      <Button variant={"tomato"} className="mt-4">
        Submit Your Message
      </Button>
    </div>
  );
}
