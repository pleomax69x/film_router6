import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import API from "../services/api";

function HomePage() {
  const [movie, setMovie] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    API.getTrending()
      .then((data) => {
        setMovie(data.results);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1 className="main_h1">Trendings Today</h1>
      <ul className="film_list">
        {movie &&
          movie.map((mov) => (
            <li key={mov.id}>
              <Link to={`${url}movies/${mov.id}`}>{mov.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
