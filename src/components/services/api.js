import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

const apiKey = "ae0cace2b608fa732224591b2c086b58";

const getTrending = async () => {
  const urlFilm = `/trending/movie/week?api_key=${apiKey}`;
  try {
    const response = await axios.get(urlFilm);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

const movieSearch = async (query) => {
  const url = `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

const getMovieInfo = async (movie_id) => {
  const movieID = `/movie/${movie_id}?api_key=${apiKey}&language=en-US`;

  try {
    const response = await axios.get(movieID);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export default { getTrending, movieSearch, getMovieInfo };
