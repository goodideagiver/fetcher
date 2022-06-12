import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { API_TOKEN } from '../../../assets/js/API_TOKEN'; 

export const useFetchUserRepos = () => {
	const [repos, setRepos] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const username = useSelector((state) => state.githubIssues.owner);

	const getUserRepos = async () => {
		try {
			setRepos(null);
			setLoading(true);
			setError(null);

			if (!username || username.trim() === '') {
				throw new Error('Please enter a username');
			}

			const axiosHeaders = API_TOKEN
				? {
						headers: {
							Authorization: `token ${API_TOKEN}`,
						},
				  }
				: null;

			const data = await axios.get(
				`https://api.github.com/users/${username}/repos`,
				{
					...axiosHeaders,
				}
			);
			setRepos(data.data);
		} catch (err) {
			console.log(err.response.statusText);
			setError(err.response.statusText);
		}
		setLoading(false);
	};

	return { foundUserRepos: repos, loading, error, getUserRepos };
};
