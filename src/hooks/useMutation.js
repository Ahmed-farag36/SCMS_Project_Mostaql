import { useState } from "react";

export default () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const post = (query, param) => {
		setLoading(true);
		query(param)
			.then(res => res.json())
			.then(
				data => {
					setData(data);
					console.log(data);
					setLoading(false);
				},
				error => {
					setLoading(false);
					setError(error);
				}
			);
	};

	return { data, loading, error, post };
};
