import { InputSearchProps } from "@/src/app/models/models";

export default function InputSearch({ register }: InputSearchProps) {
  return (
    <>
      <input
        id="location"
        type="text"
        className="custom-input"
        placeholder="Search Location"
        {...register("location")}
      />
    </>
  );
}
