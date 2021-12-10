import { useEffect, useState } from "react";
import {
  Route,
  useRouteMatch,
  NavLink,
  useParams,
  useHistory,
} from "react-router-dom";

import API from "../services/api";
import CastPage from "./CastPage";
import ReviewPage from "./ReviewPage";

const FilmInfo = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const { movieId } = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/original";

  const handleClick = () => {
    history.push("/");
  };

  useEffect(() => {
    API.getMovieInfo(movieId)
      .then((data) => {
        setMovie(data);
        setLoad(true);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div>
      <h2>film info page</h2>

      <button onClick={handleClick} type="button">
        Go Back
      </button>
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
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <hr />

        <Route exact path={`${path}/cast`}>
          <CastPage />
        </Route>
        <Route path={`${path}/reviews`}>
          <ReviewPage />
        </Route>
      </div>
    </div>
  );
};

export default FilmInfo;
