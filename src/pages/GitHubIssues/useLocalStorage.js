import { issueLikesActions } from '../../store/issue-likes-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		const savedLikedIssuesIdsFromLocalStorage = localStorage.getItem('likedIssues');
		if (savedLikedIssuesIdsFromLocalStorage) {
			dispatch(issueLikesActions.setLikedIssues(JSON.parse(savedLikedIssuesIdsFromLocalStorage)));
		}
	}, []);
};
