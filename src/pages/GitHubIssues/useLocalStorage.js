import { issueLikesActions } from '../../store/issue-likes-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		const localStorageSavedLikedIssues = localStorage.getItem('likedIssues');
		if (localStorageSavedLikedIssues) {
			dispatch(issueLikesActions.setLikedIssues(JSON.parse(localStorageSavedLikedIssues)));
		}
	}, []);
};
