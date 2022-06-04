import { useEffect, useRef, useState } from 'react';

import axios from 'axios';

const useAxios = (url, method, payload) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState('');
	const [loaded, setLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const controllerRef = useRef(new AbortController());
	const cancel = () => {
		controllerRef.current.abort();
	};

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const response = await axios.request({
					data: payload,
					signal: controllerRef.current.signal,
					method,
					url,
				});

				setData(response.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoaded(true);
				setIsLoading(false);
			}
		})();
	}, []);

	return { cancel, data, error, loaded, isLoading };
};

export default useAxios;
