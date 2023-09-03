"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import {
  selectIsManager,
  selectUserId,
  setIsManger,
  setManagerId,
} from "@/store/userSlice";
import { store } from "@/store/store";

const formSchema = z.object({
  about: z
    .string()
    .min(5, { message: "About must be at least 5 characters" })
    .max(250, { message: "Do not exceed 250 characters" }),
  telephoneNumber: z
    .string()
    .length(10, { message: "Your telephone number must be 10 characters" }),
});

export default function ManagerForm() {
  const userId = useSelector(selectUserId);
  const isManager = useSelector(selectIsManager);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: "",
      telephoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      fetch("/api/manager/add-manager", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          about: values.about,
          telephone: values.telephoneNumber,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          //   set the manager id in the store
          store.dispatch(setIsManger({ isManager: true }));
          store.dispatch(setManagerId({ managerId: Number(data) }));
        });
    } catch (e) {
      throw new Error("Could not add data");
    }
  }

  return (
    <>
      {isManager ? (
        <div className="mt-16">
          <h2 id="sign-up"> You are already a manager</h2>
          <p className="mt-6">
            As a hostel manager you have the privilege to add a hostel to our
            database.
          </p>
        </div>
      ) : (
        <div>
          <div className=" mt-16">
            <h2>Submit your details to become a manager</h2>
          </div>
          <section className="mt-6" id="sign-up">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="about"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tell us something about yourself</FormLabel>
                      <FormControl>
                        <Input placeholder="About yourself..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Tell us a little about yourself, and why students should
                        choose your hostel
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telephoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telephone number</FormLabel>
                      <FormControl>
                        <Input placeholder="About yourself..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Give us your most used telephone number, because
                        students may give you a call
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant={"tomato"} type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </section>
        </div>
      )}
    </>
  );
}
