import { useState } from "react";

export default () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const post = (query, param1, param2) => {
    setLoading(true);
    query(param1, param2)
      .then(res => res.json())
      .then(
        data => {
          setLoading(false);
          setData(data);
          console.log(data);
        },
        error => {
          setLoading(false);
          setError(error);
        }
      );
  };

  return { data, loading, error, post };
};
