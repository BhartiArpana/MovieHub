import "../styles/movieCard.scss";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">

      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
      />

      <button className="like-btn">
        <FaHeart />
      </button>

      <div className="rating">
        ⭐ {movie.vote_average?.toFixed(1)}
      </div>

    </div>
  );
};

export default MovieCard;