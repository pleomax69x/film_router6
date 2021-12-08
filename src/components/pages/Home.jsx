import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [trendings, setTrendings] = useState([]);
  //   const url =
  //     "https://api.themoviedb.org/3/movie/popular?api_key=ae0cace2b608fa732224591b2c086b58&language=en-US&page=1";
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=ae0cace2b608fa732224591b2c086b58";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTrendings(data.results);
        console.log(data);
      });
    console.log(trendings);
  }, []);
  return (
    <div>
      <h1 className="main_h1">Trendings Today</h1>
      <ul className="film_list">
        {trendings &&
          trendings.map((trend) => (
            <li>
              <Link to="">{trend.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
