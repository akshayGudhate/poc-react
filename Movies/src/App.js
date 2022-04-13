import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const result = await fetch('https://swapi.dev/api/films/');
			// check error
			if (!result.ok) throw new Error('Something went wrong');
			// parse data
			const data = await result.json();
			const transformedData = data.results.map(movie => {
				return {
					id: movie.episode_id,
					title: movie.title,
					openingText: movie.opening_crawl,
					releaseDate: movie.release_date
				};
			});

			// set movies state
			setMovies(transformedData);
		} catch (err) {
			console.log('Inside error');
			setError(err.message);
		};
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	// set content to render
	let movieContent = <p>Movies not found.</p>;
	if (isLoading) movieContent = <p>loading...</p>;
	if (!isLoading && movies.length > 0) movieContent = <MoviesList movies={movies} />;
	if (!isLoading && error) movieContent = <p>{error}</p>;


	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{movieContent}</section>
		</React.Fragment >
	);
};

export default App;
