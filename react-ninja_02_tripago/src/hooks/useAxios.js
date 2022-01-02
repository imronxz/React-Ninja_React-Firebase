import { useEffect, useState } from 'react';
import axios from 'axios';

// TODO: Costum Fetch Hook API
export const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const results = await axios.get(url);
      setData(results.data);

      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading };
};
