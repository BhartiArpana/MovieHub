import { useState, useEffect, useContext } from "react";
import "../styles/discover.scss";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import { MovieContext } from "../movie.context.jsx";
import { useMovie } from "../hooks/useMovie";
import { userAuth } from "../../auth/hooks/userAuth";

const Discover = () => {
  const {
    fetchPopularMovies,
    fetchActionMovies,
    fetchAdventureMovies,
    fetchAnimationMovies,
    fetchComedyMovies,
    fetchCrimeMovies,
    fetchDocumentaryMovies,
    fetchDramaMovies,
    fetchFamilyMovies,
    fetchHorrorMovies,
    loadUserFavorites,
  } = useMovie();

  const { user } = userAuth();

  const {
    popularMovies,
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaryMovies,
    dramaMovies,
    familyMovies,
    horrorMovies, // fixed name
  } = useContext(MovieContext);

  const [category, setCategory] = useState("all"); // missing state
  const [movies, setMovies] = useState([]);

  // Fetch default popular movies on mount
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // Load favorites only once when user logs in
  useEffect(() => {
    if (user) {
      loadUserFavorites();
    }
  }, [user]);

  // Update movies whenever category or context changes
  useEffect(() => {
    const loadMovies = async () => {
      switch (category) {
        case "all":
          await fetchPopularMovies();
          setMovies(popularMovies);
          break;
        case "action":
          await fetchActionMovies();
          setMovies(actionMovies);
          break;
        case "adventure":
          await fetchAdventureMovies();
          setMovies(adventureMovies);
          break;
        case "animation":
          await fetchAnimationMovies();
          setMovies(animationMovies);
          break;
        case "comedy":
          await fetchComedyMovies();
          setMovies(comedyMovies);
          break;
        case "crime":
          await fetchCrimeMovies();
          setMovies(crimeMovies);
          break;
        case "documentary":
          await fetchDocumentaryMovies();
          setMovies(documentaryMovies);
          break;
        case "drama":
          await fetchDramaMovies();
          setMovies(dramaMovies);
          break;
        case "family":
          await fetchFamilyMovies();
          setMovies(familyMovies);
          break;
        case "horror":
          await fetchHorrorMovies();
          setMovies(horrorMovies);
          break;
        default:
          break;
      }
    };

    loadMovies();
  }, [
    category,
    popularMovies,
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    documentaryMovies,
    dramaMovies,
    familyMovies,
    horrorMovies,
  ]);

  const heroMovie = movies?.[0];

  return (
    <div className="discover">
      <Navbar />

      {/* HERO */}
      {heroMovie && (
        <section
          className="discover-hero"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>{heroMovie.title}</h1>
              <p>{heroMovie.overview}</p>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY BUTTONS */}
      <div className="category-buttons">
        {[
          "all",
          "action",
          "adventure",
          "animation",
          "comedy",
          "crime",
          "documentary",
          "drama",
          "family",
          "horror",
        ].map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* MOVIES GRID */}
      <section className="discover-movies">
        <div className="movies-grid">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;