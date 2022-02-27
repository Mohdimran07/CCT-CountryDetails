import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url: string, value: string, trigerApi: boolean) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState({ type: 0, message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const fetchFromApi = async () => {
    try {
      console.log("init"); 
      setIsLoading(true);
      const responce = await axios.get(url + value);

      if (!responce.data) {
        setError({ type: 100, message: "  Something went Worng..." });
      } else {
        setData(responce.data);
        setError({ type: 0, message: "" });
      }
    } catch (e) {
      setError({ type: 200, message: "Something went Worng..." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url && value) {
      fetchFromApi();
    }
  }, [trigerApi]);

  return { data, error, isLoading };
};

export default useFetchApi; 