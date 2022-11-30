import { useState, useEffect, React } from "react";
import "./App.css";
import SearchIcon from "./assets/searchIcon.svg";
import MovieCard from "./components/MovieCard";

const API_KEY = "6b006179";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Database</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
