"use client";
import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "@/lib/utils";

export default function SelectFromComboBox({
  className,
  options,
  defaultMessage,
}: {
  className?: string;
  options: { value: string; label: string }[];
  defaultMessage: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="bg-tomato-1 border-tomato-6 hover:bg-tomato-3 data-[state=open]:bg-tomato-4"
      >
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className={cn(
            "max-w-full justify-between text-tomato-12 hover:text-tomato-12",
            className
          )}
        >
          {value
            ? options.find((object) => object.value === value)?.label
            : defaultMessage}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-full p-0 border-tomato-6 bg-tomato-1 text-tomato-12">
        <Command className="bg-tomato-1 text-tomato-12">
          <CommandInput placeholder={"Search..."} />
          <CommandEmpty>No value found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                className="text-tomato-12 aria-selected:bg-tomato-4 aria-selected:text-tomato-12"
                key={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
