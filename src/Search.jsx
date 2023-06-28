import { SearchInput } from 'evergreen-ui';
import React from 'react';

const Search = () => {
	return (
		<SearchInput
			placeholder="Enter search term, for example: cats"
			width="100%"
			autoFocus
		/>
	);
};

export default Search;
