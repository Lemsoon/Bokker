import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (apiUrl: string) => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setResult(response.data);
    };

    fetchData();
  }, [apiUrl]);

  return result;
};
