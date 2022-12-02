import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img
          className="movie-card-image"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x420"
          }
          alt={movie.Title}
        />
      </div>

      <div className="movie-card-details">
        <div>
          <span className="movie-type">{movie.Type}</span>
        </div>

        <div>
          <h3 className="movie-title">{movie.Title}</h3>
        </div>

        <div>
          <p className="movie-year">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
