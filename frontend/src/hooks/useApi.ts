import { useState, useEffect } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<T>(`${API}${endpoint}`)
      .then((res) => setData(res.data))
      .catch(() => setError('Failed to load data'))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
}

export async function submitContact(form: object) {
  const res = await axios.post(`${API}/contact`, form);
  return res.data;
}
