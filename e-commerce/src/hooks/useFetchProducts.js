// src/hooks/useFetchProducts.js
import { useEffect, useState } from "react";

const useFetchProducts = (id = null) => {
  const [data, setData] = useState(id ? null : []);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = id 
      ? `https://dummyjson.com/products/${id}`
      : `https://dummyjson.com/products`;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const result = await response.json();
        setData(id ? result : result.products);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch products');
        }
      } 
      
    };

    fetchData();

    return () => controller.abort();
  }, [id]);

  return { data, error };
};

export default useFetchProducts;