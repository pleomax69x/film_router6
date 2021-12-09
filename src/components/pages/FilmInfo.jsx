import { useEffect, useState } from "react";
import {
  Route,
  useRouteMatch,
  Switch,
  BrowserRouter,
  Link,
} from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";

import API from "../services/api";
import CastPage from "./CastPage";
import ReviewPage from "./ReviewPage";

const FilmInfo = () => {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(false);
  const { url, path } = useRouteMatch();
  const match = useRouteMatch();
  console.log(match, "match");
  const params = useParams();
  const imgUrl = "https://image.tmdb.org/t/p/original";
  console.log(params, "params");

  useEffect(() => {
    API.getMovieInfo(params.movieId)
      .then((data) => {
        setMovie(data);
        setLoad(true);
        // console.log(data);
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
        {/* <BrowserRouter> */}
        <ul>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path={`${path}/cast`}>
            <CastPage />
          </Route>
          <Route path={`${path}/reviews`}>
            <ReviewPage />
          </Route>
        </Switch>

        {/* <Switch>
            <Route path={`${url}/cast`} children={<CastPage />} />
          </Switch> */}
        {/* </BrowserRouter> */}
      </div>

      {/* <Route path="movies/:movieId/cast" component={<CastPage />} exact /> */}
    </div>
  );
};

export default FilmInfo;
