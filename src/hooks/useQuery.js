import { useState, useEffect } from "react";

export default (query, param) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		query(param)
			.then(res => res.json())
			.then(data => {
				setData(data);
				setLoading(false);
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			});
	}, []);

	return { data, loading, error, setData };
};
