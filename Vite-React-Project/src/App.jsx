import React, { useState, useEffect } from 'react';
import './App.css';

// Your API key and base URL
const API_URL = 'http://www.omdbapi.com?apikey=3499d560';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MovieLand</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#movies">Movies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// SearchBar component
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      placeholder="Search for movies"
      value={searchTerm}  // Control input value with searchTerm state
      onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
    />
  );
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("superman"); // For managing the search term

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); // Update state with fetched movies
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]); // Re-fetch movies if searchTerm changes

  return (
    <div className="App">
      <Navbar />

      <div className="search">
        {/* Use the SearchBar component */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="movies-container">
        {movies ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default App;
