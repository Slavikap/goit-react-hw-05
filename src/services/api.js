import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDhjZWQxNDRmMDgxZGE0Y2JkZjAyZTE3MzMwY2U0ZSIsInN1YiI6IjY2M2I2MjhjNWFjOGE4YWIxZWVjOWYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pjFTnWPpCYyv8Pbk234Yfp_flVBr9JSm_fprWX_d-kE";

export const getTrandingMovies = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/trending/movie/day`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};

export const getMovieById = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getMovieCast = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}/credits`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getMovieReviews = async (movieId) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/movie/${movieId}/reviews`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};

export const getSearchMovies = async (query) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/search/movie?query=${query}`,
    params: { include_adult: "false", language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  const { data } = await axios.request(options);
  return data;
};