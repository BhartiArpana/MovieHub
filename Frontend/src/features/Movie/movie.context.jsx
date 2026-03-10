import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [actionMovies, setActionMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [fantasyMovies, setFantasyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  return (
    <MovieContext.Provider
      value={{
        loading,
        setLoading,

        popularMovies,
        setPopularMovies,

        topRatedMovies,
        setTopRatedMovies,

        upcomingMovies,
        setUpcomingMovies,

        actionMovies,
        setActionMovies,

        adventureMovies,
        setAdventureMovies,

        animationMovies,
        setAnimationMovies,

        comedyMovies,
        setComedyMovies,

        crimeMovies,
        setCrimeMovies,

        documentaryMovies,
        setDocumentaryMovies,

        dramaMovies,
        setDramaMovies,

        familyMovies,
        setFamilyMovies,

        fantasyMovies,
        setFantasyMovies,

        horrorMovies,
        setHorrorMovies,

        favoriteMovies,
        setFavoriteMovies,

        searchMovies,
        setSearchMovies
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};