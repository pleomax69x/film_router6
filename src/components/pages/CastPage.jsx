import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    API.getMovieInfoCast(movieId)
      .then((data) => {
        setCast(data.cast);
      })
      .catch((error) => console.log(error));
  }, [movieId]);
  return (
    <div>
      {/* <h3>{movieId}</h3> */}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {cast &&
          cast.map((cas) => (
            <li>
              <img src={imgUrl + cas.profile_path} alt="" width="100" />
              <p>{cas.original_name}</p>
              <p>Character {cas.character} </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CastPage;
