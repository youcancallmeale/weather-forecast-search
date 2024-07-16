const ENDPOINT_WEATHER_RESULT = `https://api.open-meteo.com/v1/forecast?latitude=-22.9064&longitude=-43.1822&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=3`;

export function GetWeather(inputValue: string) {
  if (inputValue !== "") {
    try {
      const res = fetch(`${ENDPOINT_WEATHER_RESULT}${inputValue}`)
        .then((res) => res.json())
        .catch((error) => console.log(error));

      return res;
    } catch (error) {
      console.log(error);
    }
  } else {
    return null;
  }
}
