"use client";
import { useForm } from "react-hook-form";
import InputSearch from "./components/InputSearch/InputSearch";
import SearchLocationList from "./components/SearchLocationList/SearchLocationList";
import { Labels } from "./constants/labels";

export default function Home() {
  const { register, watch } = useForm({ mode: "onChange" });

  return (
    <div className="custom-flex-center">
      <div className="custom-container">
        <h1 className="custom-title">{Labels.title}</h1>
        <p className="custom-subtitle">{Labels.subtitle}</p>
        <div className="custom-form-container">
          <label htmlFor="weather-location" className="sr-only">
            {Labels.inputLabel}
          </label>
          <form className="custom-form">
            <InputSearch register={register} />
            <SearchLocationList watch={watch} />
          </form>
        </div>
      </div>
    </div>
  );
}
