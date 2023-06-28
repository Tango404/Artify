import { SearchInput } from 'evergreen-ui';
import React from 'react';

const Search = ({ query, onChange }) => {
	return (
		<SearchInput
			placeholder="Enter search term, for example: cats"
			width="100%"
			autoFocus
			value={query}
			onChange={onChange}
		/>
	);
};

export default Search;
