"use client";
import { useForm } from "react-hook-form";
import InputSearch from "./components/InputSearch/InputSearch";
import SearchLocationList from "./components/SearchLocationList/SearchLocationList";
import { Labels } from "./constants/labels";

export default function Home() {
  const { register, watch } = useForm({ mode: "onChange" }); // Movendo useForm para o nível superior

  return (
    <div className="flex h-2/3 items-center px-6 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-lg">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {Labels.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          {Labels.subtitle}
        </p>
        <div className="mt-6 w-full">
          <label htmlFor="weather-location" className="sr-only">
            {Labels.inputLabel}
          </label>
          <form className="w-full">
            <InputSearch register={register} />
            <SearchLocationList watch={watch} />
          </form>
        </div>
      </div>
    </div>
  );
}
