import { InputContext } from "@/app/contexts/InputContext";
import { SearchLocationRequest } from "@/app/hooks/useSearchLocation";
import { useState, useEffect } from "react";
import { useContext } from "react";

export default function ResultSearch() {
  const [data, setData] = useState(null);
  const { inputValue } = useContext(InputContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await SearchLocationRequest(inputValue);
      setData(res);
    };

    fetchData();
  }, [inputValue]);

  useEffect(() => {
    data !== null && console.log(data);
  }, [data]);
  return <p>test</p>;
}
