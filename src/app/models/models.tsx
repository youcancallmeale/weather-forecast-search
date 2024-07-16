import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IResultsLocationSearch {
  results: [
    {
      id: number;
      admin1: string;
      country: string;
      country_code: string;
      name: string;
      latitude: number;
      longitude: number;
    },
  ];
}

export interface LocationInput {
  location: string;
}

export interface InputSearchProps {
  register: UseFormRegister<FieldValues>;
}
