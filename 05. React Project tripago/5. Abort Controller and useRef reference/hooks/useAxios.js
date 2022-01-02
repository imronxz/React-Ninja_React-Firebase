import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// TODO: Costum Fetch Hook API
export const useAxios = (url, _options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = useRef(_options).current;

  useEffect(() => {
    // console.log(options);
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(url, { signal: controller.signal });
        setData(await res.data);

        setIsLoading(false);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetc data dibatalkan 🚫');
        } else {
          setIsLoading(false);
          setError('Terjadi kesalahan pada fetch data');
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isLoading, error };
};
