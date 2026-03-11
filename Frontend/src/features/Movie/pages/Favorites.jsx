import { useEffect } from "react";
import { userAuth } from "../../auth/hooks/userAuth.js";
import MovieCard from "../components/MovieCard.jsx";
import Navbar from "../components/Navbar.jsx";

const Favorites = () => {
  const { user, handleGetMe } = userAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
   <>
   <Navbar />
    <div className="favorites-container">
      {user.favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="movies-grid">
          {user.favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true} // ❤️ red for all favorites
            />
          ))}
        </div>
      )}
    </div>
   </>
  );
};

export default Favorites;