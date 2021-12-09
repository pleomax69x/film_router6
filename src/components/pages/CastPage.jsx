import { useParams } from "react-router-dom";

const CastPage = () => {
  const params = useParams();
  const { movieId } = useParams();
  console.log(params);
  return (
    <div>
      <h5>Cast</h5>
    </div>
  );
};

export default CastPage;
