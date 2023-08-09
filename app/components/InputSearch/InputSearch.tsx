import { InputSearchProps } from "@/app/models/models";

export default function InputSearch({ register }: InputSearchProps) {
  return (
    <div className="items-center mx-auto max-w-xl lg:max-w-lg">
      <input
        id="location"
        type="text"
        className="w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Search Location"
        {...register("location")}
      />
    </div>
  );
}
