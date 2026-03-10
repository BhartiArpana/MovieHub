import axios from "axios";

const API_KEY = "f46755b83cc704dd6d14b5dafe3f3394";



const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const getAllMovies = async () => {
  const response = await api.get(`/movie/popular?api_key=${API_KEY}`);
  return response.data;
};

export const topRatedMovie = async () => {
  const response = await api.get(`/movie/top_rated?api_key=${API_KEY}`);
  return response.data;
};

export const upcomingMovies = async () => {
  const response = await api.get(`/movie/upcoming?api_key=${API_KEY}`);
  return response.data;
};

export const actionMovies = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=28`
  );
  return response.data;
};

export const adventureMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=12`
  );
  return response.data;
};

export const animationMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=16`
  );
  return response.data;
};

export const comedyMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=35`
  );
  return response.data;
};

export const crimeMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=80`
  );
  return response.data;
};

export const documentaryMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=99`
  );
  return response.data;
};

export const dramaMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=18`
  );
  return response.data;
};
export const familyMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=10751`
  );
  return response.data;
};
export const fantasyMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=14`
  );
  return response.data;
};
export const horrorMovie = async () => {
  const response = await api.get(
    `/discover/movie?api_key=${API_KEY}&with_genres=27`
  );
  return response.data;
};

export const addToFavoriteMovie = async (movieId, movieData) => {
  const backendApi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
  });
  const response = await backendApi.post('/users/favorites/add', {
    movieId,
    movieData
  });
  return response.data;
};

export const removeFromFavoriteMovie = async (movieId) => {
  const backendApi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
  });
  const response = await backendApi.delete('/users/favorites/remove', {
    data: { movieId }
  });
  return response.data;
};

export const getFavoritesFromBackend = async () => {
  const backendApi = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
  });
  const response = await backendApi.get('/users/favorites');
  return response.data;
};

export const getFevoriteMovie = async (account_id)=>{
    const response = await api.get(`/account/${account_id}/favorite/movies`)
    return response.data
}

export const userHistory = async(account_id)=>{
    const response = await api.get(`/account/${account_id}/watchlist/movies`)
    return response.data
}

export const search = async(movie_name)=>{
    const response = await api.get(`/search/multi?api_key=${API_KEY}&query=${movie_name}`)
}