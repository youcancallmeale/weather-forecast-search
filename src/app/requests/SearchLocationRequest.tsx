export async function SearchLocationRequest(inputValue: string) {
  console.log("entrou aqui");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ENDPOINT_LOCATION_LIST}${inputValue}`
    );

    if (!response.ok) {
      throw new Error(`Request com erro status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results) {
      throw new Error("Sem resultados na resposta");
    }

    return data;
  } catch (error) {
    return null;
  }
}
