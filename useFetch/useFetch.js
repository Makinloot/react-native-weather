import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);

      const res = await fetch(url);
      const jsonData = await res.json();
      if (res.ok) setData(jsonData);
      else setError(true);
      
      setLoading(false);
    })();
  }, []);

  return [data, error, loading];
}