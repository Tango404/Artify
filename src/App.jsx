import { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { search } from './api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState(null);

	useEffect(() => {
		if (!(query || query.length)) {
			setResults(null);
			return;
		}
		if (query.length < 3) {
			return;
		}

		search(query)
			.then((results) => {
				if (results && results.data) {
					setResults(results.data);
				}
			})
			.catch((err) => console.log(err));
	}, [query]);

	return (
		<div className="App">
			<header>
				<Navbar
					bg="dark"
					variant="dark"
				>
					<Navbar.Brand>Artify</Navbar.Brand>
				</Navbar>
				<div className="jumbotron jumbotron-background">
					<h1>Find Art You Love!</h1>
					<Search
						query={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
			</header>
			<main>
				<section>
					<SearchResults results={results} />
				</section>
			</main>
		</div>
	);
}

export default App;
