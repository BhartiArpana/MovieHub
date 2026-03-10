import { useContext } from "react";
import { MovieContext } from "../movie.context.jsx";

import {
  getAllMovies,
  topRatedMovie,
  upcomingMovies,
  actionMovies,
  adventureMovie,
  animationMovie,
  comedyMovie,
  crimeMovie,
  documentaryMovie,
  dramaMovie,
  familyMovie,
  fantasyMovie,
  horrorMovie,
  getFevoriteMovie,
  search
} from "../services/movie.api";

export const useMovie = () => {

  const context = useContext(MovieContext);

  const {
    loading,
    setLoading,

    setPopularMovies,
    setTopRatedMovies,
    setUpcomingMovies,

    setActionMovies,
    setAdventureMovies,
    setAnimationMovies,
    setComedyMovies,
    setCrimeMovies,
    setDocumentaryMovies,
    setDramaMovies,
    setFamilyMovies,
    setFantasyMovies,
    setHorrorMovies,

    setFavoriteMovies,
    setSearchMovies
  } = context;

  const fetchPopularMovies = async () => {
    setLoading(true);
    const data = await getAllMovies();
    setPopularMovies(data.results);
    setLoading(false);
  };

  const fetchTopRatedMovies = async () => {
    setLoading(true);
    const data = await topRatedMovie();
    setTopRatedMovies(data.results);
    setLoading(false);
  };

  const fetchUpcomingMovies = async () => {
    setLoading(true);
    const data = await upcomingMovies();
    setUpcomingMovies(data.results);
    setLoading(false);
  };

  const fetchActionMovies = async () => {
    setLoading(true);
    const data = await actionMovies();
    setActionMovies(data.results);
    setLoading(false);
  };

  const fetchAdventureMovies = async () => {
    setLoading(true);
    const data = await adventureMovie();
    setAdventureMovies(data.results);
    setLoading(false);
  };

  const fetchAnimationMovies = async () => {
    setLoading(true);
    const data = await animationMovie();
    setAnimationMovies(data.results);
    setLoading(false);
  };

  const fetchComedyMovies = async () => {
    setLoading(true);
    const data = await comedyMovie();
    setComedyMovies(data.results);
    setLoading(false);
  };

  const fetchCrimeMovies = async () => {
    setLoading(true);
    const data = await crimeMovie();
    setCrimeMovies(data.results);
    setLoading(false);
  };

  const fetchDocumentaryMovies = async () => {
    setLoading(true);
    const data = await documentaryMovie();
    setDocumentaryMovies(data.results);
    setLoading(false);
  };

  const fetchDramaMovies = async () => {
    setLoading(true);
    const data = await dramaMovie();
    setDramaMovies(data.results);
    setLoading(false);
  };

  const fetchFamilyMovies = async () => {
    setLoading(true);
    const data = await familyMovie();
    setFamilyMovies(data.results);
    setLoading(false);
  };

  const fetchFantasyMovies = async () => {
    setLoading(true);
    const data = await fantasyMovie();
    setFantasyMovies(data.results);
    setLoading(false);
  };

  const fetchHorrorMovies = async () => {
    setLoading(true);
    const data = await horrorMovie();
    setHorrorMovies(data.results);
    setLoading(false);
  };

  const fetchFavoriteMovies = async (accountId) => {
    setLoading(true);
    const data = await getFevoriteMovie(accountId);
    setFavoriteMovies(data.results);
    setLoading(false);
  };

  const searchMovies = async (movieName) => {
    setLoading(true);
    const data = await search(movieName);
    setSearchMovies(data.results);
    setLoading(false);
  };

  return {
    loading,

    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,

    fetchActionMovies,
    fetchAdventureMovies,
    fetchAnimationMovies,
    fetchComedyMovies,
    fetchCrimeMovies,
    fetchDocumentaryMovies,
    fetchDramaMovies,
    fetchFamilyMovies,
    fetchFantasyMovies,
    fetchHorrorMovies,

    fetchFavoriteMovies,
    searchMovies
  };
};