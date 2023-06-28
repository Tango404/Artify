import { useState } from 'react';
import { Navbar } from 'react-bootstrap';

import Search from './Search';
import SearchResults from './SearchResults';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
					<Search />
				</div>
			</header>
			<main>
				<section>
					<SearchResults />
				</section>
			</main>
		</div>
	);
}

export default App;
