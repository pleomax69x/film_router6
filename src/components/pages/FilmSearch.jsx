import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { toast } from "react-toastify";

function FilmSearch() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Enter word");
      return;
    }

    API.movieSearch(query).then((data) => {
      setMovie(data.results);
      // console.log(data);
    });

    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search_form">
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
