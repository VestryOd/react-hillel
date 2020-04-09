import { useEffect, useState } from 'react';
import apiClient from '../api-client';

export default function useData(path, initialValue, immidiateLoading = true) {
  const [data, setdata] = useState(initialValue);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    if (immidiateLoading) {
      setFetching(true);
      apiClient.get(path).then(responce => {
      setdata(responce.data);
      setFetching(false);
    })
    }
  }, [path, immidiateLoading]);

  return [data, isFetching];
}