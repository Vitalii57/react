import { useState, useEffect } from "react";
import axios from "axios";

function useJsonFetch(url, { opts }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const responce = await axios.get(url + opts);
      setData(responce.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [opts]);

  return [{ data, loading, error }];
}
export default useJsonFetch;