import { useState } from "react";
import { Link } from "react-router-dom";

function FilmSearch() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const apiKey = "ae0cace2b608fa732224591b2c086b58";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      // toast.error("Enter word");
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        console.log(data);
      });

    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onClick={handleSubmit} className="search_form">
        <input
          className="search_input"
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          placeholder="Enter film to search"
          autoComplete="off"
        />
        <button className="search_btn" type="submit">
          Search
        </button>
      </form>
      <ul className="search_list">
        {movie &&
          movie.map((mov) => (
            <li key={mov.id} className="search_list--item">
              <Link to="">{mov.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FilmSearch;
