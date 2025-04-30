import { useState, useEffect } from "react";

export function useFetchMultipleProducts(ids) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (ids.length === 0) {
      setData([]);
      return;
    }

    setLoading(true);
    setError(null);

    Promise.all(
      ids.map(id =>
        fetch(`https://fakestoreapi.com/products/${id}`).then(res => {
          if (!res.ok) throw new Error("Failed to fetch product");
          return res.json();
        })
      )
    )
      .then(setData)
      .catch(() => setError("Failed to load favourite products"))
      .finally(() => setLoading(false));
  }, [ids]);

  return { data, loading, error };
}
