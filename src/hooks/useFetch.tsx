import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (apiUrl: string) => {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setResult(response.data);
      } catch (error) {
        console.error("Error with fetching...", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return result;
};
