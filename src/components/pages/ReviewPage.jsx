import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function ReviewPage() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  // const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    API.getMovieInfoReviews(movieId)
      .then((data) => {
        setReviews(data.results);
      })
      .catch((error) => console.log(error));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have ane Reviews</p>;
  }
  return (
    <div>
      {reviews.map((rev) => (
        <>
          <p style={{ padding: "10px" }}>Author: {rev.author} </p>
          <p style={{ padding: "10px" }}>{rev.content}</p>
        </>
      ))}
    </div>
  );
}

export default ReviewPage;
