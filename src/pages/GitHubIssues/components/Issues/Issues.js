import styles from './Issues.module.css';
import { useEffect } from 'react';

const Issues = ({ data }) => {
	if (!data) {
		return <div>No issues to display</div>;
	}

	console.log(data);


	return <div>Issues</div>;
};

export default Issues;
