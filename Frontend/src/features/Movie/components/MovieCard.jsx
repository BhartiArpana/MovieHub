import "../styles/movieCard.scss";
import { FaHeart } from "react-icons/fa";
import { useMovie } from "../hooks/useMovie";
import { userAuth } from "../../auth/hooks/userAuth"; // tumhara userAuth hook
import { useState, useEffect, useContext, memo } from "react";
import { MovieContext } from "../movie.context";

const MovieCard = memo(({ movie }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const { handleAddFavorite, handleRemoveFavorite } = useMovie(); // favorite API
  const { user, handleGetMe } = userAuth(); // current logged-in user
  const { addToFavoriteMovie } = useContext(MovieContext); // favorites list from context
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load current user if not present
  useEffect(() => {
    if (!user) handleGetMe();
  }, [user, handleGetMe]);

  // Check if movie is in favorites list
  useEffect(() => {
    if (addToFavoriteMovie && addToFavoriteMovie.length > 0) {
      const isFavorited = addToFavoriteMovie.some(fav => fav.id === movie.id);
      setLiked(isFavorited);
    } else if (!addToFavoriteMovie || addToFavoriteMovie.length === 0) {
      setLiked(false);
    }
  }, [addToFavoriteMovie, movie.id]);

  const handleLike = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      if (liked) {
        // Unlike
        await handleRemoveFavorite(movie.id);
        setLiked(false);
      } else {
        // Like
        await handleAddFavorite(movie.id, movie);
        setLiked(true);
      }
    } catch (err) {
      console.error("Error updating favorite:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="movie-card">
      <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />

      <button
        className={`like-btn ${liked ? "liked" : ""}`}
        onClick={handleLike}
        disabled={isLoading}
      >
        <FaHeart />
      </button>

      <div className="rating">⭐ {movie.vote_average?.toFixed(1)}</div>
    </div>
  );
});

MovieCard.displayName = "MovieCard";

export default MovieCard;