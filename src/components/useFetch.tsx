import { useEffect, useState } from "react";

interface FetchProps {
  url: string;
}

interface errorState {
  message: string;
}

export const useFetch = ({url}: FetchProps) => {
  const [countries, setCountries] = useState<any[]>(['']);
  const [error, setError] = useState<errorState>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.length ? setCountries(data) : setError(data)
      })
      // .then(setCountries)
      // .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { countries, error, loading };
};