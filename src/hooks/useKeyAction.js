import { useEffect } from 'react';

export const useKeyAction = (keycode, callbackFunction) => {
	useEffect(() => {
		const keyPressHandler = (event) => {
			if (event.keyCode === keycode) {
				callbackFunction();
			}
		};
		window.addEventListener('keydown', keyPressHandler);

		return () => {
			window.removeEventListener('keydown', keyPressHandler);
		};
	}, []);
};
