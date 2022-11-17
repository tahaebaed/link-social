import * as yup from 'yup';

const searchQuery = yup.object({
	query: yup.string().required("search query can't be empty"),
});

export { searchQuery };
