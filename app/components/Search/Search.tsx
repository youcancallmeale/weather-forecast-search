"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import ResultSearch from "./ResultSearch";

export default function Search() {
  const { handleSubmit } = useForm({ mode: "onBlur" });
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input />
      <ResultSearch />
    </form>
  );
}
