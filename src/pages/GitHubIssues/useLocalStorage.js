import { issueLikesActions } from '../../store/issue-likes-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const useLocalStorage = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		const existingIssues = localStorage.getItem('likedIssues');
		if (existingIssues) {
			dispatch(issueLikesActions.setLikedIssues(JSON.parse(existingIssues)));
		}
	}, []);
};
