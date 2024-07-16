"use client";

import { IResultsLocationSearch } from "@/src/app/models/models";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FieldValues, UseFormWatch } from "react-hook-form";
import { SearchLocationRequest } from "../../requests/SearchLocationRequest";

const IMG_URL = `https://open-meteo.com/images/country-flags/`;

interface SearchLocationListProps {
  watch: UseFormWatch<FieldValues>;
}

export default function SearchLocationList({ watch }: SearchLocationListProps) {
  const locationValue = watch("location");

  const [data, setData] = useState<IResultsLocationSearch>();

  useEffect(() => {
    if (locationValue !== undefined) {
      SearchLocationRequest(locationValue).then((res) => {
        setData(res);
      });
    }
  }, [locationValue]);

  return data?.results && data.results.length > 0 ? (
    <div className="custom-div">
      {data?.results?.map((item) => (
        <button key={item.id} type="button" className="custom-button">
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
    data?.results && <h1>Sem resultados para essa busca</h1>
  );
}
