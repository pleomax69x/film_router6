import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const FilmInfo = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const params = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/original";
  console.log(params);

  useEffect(() => {
    API.getMovieInfo(params.movieId)
      .then((data) => {
        setMovie(data);
        setLoad(true);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>film info page</h2>

      <button type="button">Go Back</button>
      <div className="imgMainWrapper">
        <img src={imgUrl + movie.poster_path} alt="" width="200" />
        <div>
          <h3>{movie.original_title}</h3>
          <p>User Score {movie.vote_average} </p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>

          {load && <p>{movie.genres.map((genr) => genr.name + " ")}</p>}
        </div>
      </div>
      <div>
        <h5>Additional Info</h5>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    </div>
  );
};

export default FilmInfo;
