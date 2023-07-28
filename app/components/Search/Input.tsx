"use client";

import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { InputContext } from "@/app/contexts/InputContext";

export default function InputComponent() {
  const { updateInputValue } = useContext(InputContext);
  const { register } = useForm({ mode: "onBlur" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateInputValue(event.target.value);
  };

  return (
    <input
      id="weather-location"
      type="text"
      autoComplete="weather"
      required
      className="w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      placeholder="Search Location"
      {...register("location")}
      onBlur={handleInputChange}
    />
  );
}
