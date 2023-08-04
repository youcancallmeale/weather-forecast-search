import Search from "./components/Search/Search";
import { Labels } from "./constants/labels";
import Provider from "./contexts/InputContext";

export default function Home() {
  return (
    <Provider>
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
            <Search />
          </div>
        </div>
      </div>
    </Provider>
  );
}
