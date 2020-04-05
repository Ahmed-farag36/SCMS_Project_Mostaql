import { useState, useEffect } from "react";

export default (query, param) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    query(param)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [query, param]);

  return { data, loading, error, setData };
};
