"use client";

import { SearchLocationRequest } from "@/app/api/SearchLocation";
import { IResultsLocationSearch } from "@/app/models/models";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";

const IMG_URL = `https://open-meteo.com/images/country-flags/`;

interface SearchLocationListProps {
  watch: UseFormWatch<FieldValues>;
}

export default function SearchLocationList({ watch }: SearchLocationListProps) {
  const locationValue = watch("location");

  const [data, setData] = useState<IResultsLocationSearch>();

  useEffect(() => {
    if (locationValue !== undefined) {
      const fetchData = async () => {
        const res = await SearchLocationRequest(locationValue);
        setData(res);
      };
      fetchData();
    }
    console.log(locationValue);
  }, [locationValue]);

  return data?.results && data.results.length > 0 ? (
    <div className="rounded-b-lg bg-white/5  px-3.5  py-2  text-white  dark:border-gray-600 max-h-[300px] overflow-y-auto">
      {data?.results?.map((item) => (
        <button
          key={item.id}
          type="button"
          className="flex items-center w-full pr-4 py-3 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
        >
          <Image
            src={`${IMG_URL}${item.country_code}.svg`}
            width={25}
            height={25}
            alt="Image"
            className="mr-2 ml-1"
          />
          {`${item.name}, 
                ${item.admin1 ? item.admin1 : ""} | 
                ${item.country_code}`}
        </button>
      ))}
    </div>
  ) : (
    data && <h1>Sem resultados para essa busca</h1>
  );
}
