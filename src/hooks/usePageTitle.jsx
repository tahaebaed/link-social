import { useEffect } from 'react';

/**
 * Hook for change page title
 * @param {String} title page title
 * @returns {Array} [title, setTitle]
 */
function usePageTitle(title = 'title 🎉') {
	useEffect(() => {
		const oldTitle = document.title;

		setPageTitle(title);

		return () => {
			setPageTitle(oldTitle);
		};
	}, [title]);

	const setPageTitle = (newPageTitle) => {
		document.title = `Link | ${newPageTitle}`;
	};

	return [title, setPageTitle];
}
export default usePageTitle;
