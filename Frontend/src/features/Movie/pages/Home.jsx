import "../styles/home.scss";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { useMovie } from "../hooks/useMovie";
import { useContext, useEffect } from "react";
import { MovieContext } from "../movie.context.jsx";

const Home = () => {

  const { fetchPopularMovies, loading } = useMovie();

  const { popularMovies } = useContext(MovieContext);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const trendingMovie = popularMovies?.[0];

  return (
    <div className="home">

      <Navbar />

      {/* HERO SECTION */}

      {trendingMovie && (

      <section
        className="hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path})`
        }}
      >

        <div className="hero-overlay">

          <div className="hero-content">

            <p className="featured">FEATURED FILM</p>

            <h1>{trendingMovie.title}</h1>

            <div className="movie-meta">
              ⭐ {trendingMovie.vote_average}
              <span>{trendingMovie.release_date?.slice(0,4)}</span>
            </div>

            <p className="description">
              {trendingMovie.overview}
            </p>

            <button className="view-btn">
              View Details
            </button>

          </div>

          {/* SIDE POSTER */}

          <div className="hero-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${trendingMovie.poster_path}`}
              alt={trendingMovie.title}
            />
          </div>

        </div>

      </section>

      )}

      {/* MOVIE GRID */}

      <section className="movies-section">

        <h2>Trending Movies</h2>

        <div className="movies-grid">

          {popularMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;