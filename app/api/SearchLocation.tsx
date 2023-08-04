const ENDPOINT_LOCATION_LIST = `https://geocoding-api.open-meteo.com/v1/search?name=`;

export function SearchLocationRequest(inputValue: string) {
  if (inputValue !== "") {
    try {
      const res = fetch(`${ENDPOINT_LOCATION_LIST}${inputValue}`)
        .then((res) => {
          return res.json();
        })
        .catch((error) => console.log(error));

      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
