import { useEffect, useState } from "react";

export default function WeatherResult() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const getWeather = async () => {
      // const res = await GetWeather();
      // setWeather(res);
    };
    getWeather();
  }, []);
  return <h1>Weather foreacast</h1>;
}
