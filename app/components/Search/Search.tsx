"use client";

import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "@/app/contexts/InputContext";

import WeatherResult from "../WeatherResult/WeatherResult";
import SearchResult from "./SearchResult";

export default function Search() {
  const { register } = useForm({ mode: "onChange" });
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const { results } = useContext(Context);

  return (
    <div className="items-center mx-auto max-w-xl lg:max-w-lg">
      <form className="w-full">
        <input
          id="weather-location"
          type="text"
          autoComplete="weather"
          required
          className="w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Search Location"
          {...register("location")}
          onChange={handleInputChange}
        />
      </form>
      {inputValue !== "" && <SearchResult inputValue={inputValue} />}
      {results !== undefined && <WeatherResult />}
    </div>
  );
}
