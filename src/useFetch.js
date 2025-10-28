import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (options = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      let finalUrl = url;
      if (options.params) {
        const queryParams = new URLSearchParams();
        Object.entries(options.params).forEach(([key, value]) => {
          queryParams.append(key, value);
        });
        finalUrl = `${url}?${queryParams.toString()}`;
      }

      const response = await fetch(finalUrl);

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Ошибка');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback((options = {}) => {
    return fetchData(options);
  }, [fetchData]);

  return { data, isLoading, error, refetch };
};