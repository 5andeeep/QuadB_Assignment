import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.show.id === parseInt(id));

  const navigate = useNavigate();

  return (
    <div className="show-details">
      <div className="details-wrapper">
        <div className="image-wrapper">
          {movie.show.image ? (
            <img src={movie.show.image.original} />
          ) : (
            <img src="https://dummyimage.com/600x400/000/fff" />
          )}
        </div>
        <div className="details">
          <div className="p-tags">
            <p>Genre: {movie.show.genres.join(", ")}</p>
            <p>Duration: {movie.show.runtime}</p>
            <p>Rating: {movie.show.rating.average}</p>
          </div>
          <div className="btn">
            <Link to={`/book/${movie.show.id}`}>
              <button>Book Show</button>
            </Link>
            <button onClick={() => navigate("/")}>Back</button>
          </div>
        </div>
      </div>
      <h3>{movie.show.name}</h3>
      <p>Summary: {movie.show.summary}</p>
    </div>
  );
};

export default MovieDetails;
