const ENDPOINT = `https://geocoding-api.open-meteo.com/v1/search?name=`;

export function SearchLocationRequest(inputValue: string) {
  if (inputValue !== "") {
    const res = fetch(`${ENDPOINT}${inputValue}`).then((res) => res.json());
    return res;
  } else {
    return null;
  }
}
