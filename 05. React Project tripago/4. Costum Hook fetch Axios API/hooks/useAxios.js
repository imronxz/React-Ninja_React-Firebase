import { useEffect, useState } from 'react';
import axios from 'axios';

// TODO: Costum Fetch Hook API
export const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(url);
      setData(results.data);
    };
    fetchData();
  }, [url]);

  return { data };
};
