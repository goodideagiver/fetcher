import { useState } from 'react';

export const useFilterRepos = (filteredRepos) => {
	const [reposFilterName, setreposFilterName] = useState('');

	let reposToDisplay = filteredRepos;
	if (reposFilterName) {
		reposToDisplay = filteredRepos.filter((repo) => {
			return repo.name.toLowerCase().includes(reposFilterName.trim().toLowerCase());
		});
	}

	return { reposFilterName, reposToDisplay, setreposFilterName };
};
