import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div>
        <img
          className="movie-card-image"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div className="movie-card-details">
        <div>
          <span>{movie.Type}</span>
        </div>

        <div>
          <h3>{movie.Title}</h3>
        </div>

        <div>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
