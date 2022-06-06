import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

			const data = await axios.get(
				`https://api.github.com/users/${username}/repos`
			);
			setRepos(data.data);
		} catch (err) {
			console.log(err);
			setError(err.message);
		}
		setLoading(false);
	};

	return { repos, loading, error, getUserRepos };
};
