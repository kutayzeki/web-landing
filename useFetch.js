import { useState, useEffect } from "react";

export default function useFetch(
  initialUrl,
  method = "GET",
  initialBody = null
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [body, setBody] = useState(initialBody);
  const [loading, setLoading] = useState(true);

  async function fetchData(url) {
    try {
      /* const authToken = await AsyncStorage.getItem("authToken"); */
      const options = {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
        },
      };
      /* if (authToken) {
            options.headers.Authorization = `Bearer ${authToken}`;
        } */
      if (method === "GET" || (method === "POST" && body)) {
        const response = await fetch(`${url}`, options);
        const json = await response.json();
        setData(json);
      }
      //console.log(JSON.stringify(json, null, 4));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [body]);

  const refetch = (newUrl) => {
    setLoading(true);
    fetchData(newUrl);
  };

  return { data, error, loading, refetch, setBody, setUrl };
}
