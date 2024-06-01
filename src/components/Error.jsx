import { useRouteError } from "react-router-dom";
import errorImage from "../utils/images/errorImage.jpg";
import { Link } from "react-router-dom";


const Error = () => {
  const err = useRouteError();

//   const {id }= useParams();
  console.log(err)

  return (
    <div className="error-container">
      <div className="error-img">
        <img src={errorImage} alt="Error Image" width="770" height="362" />
      </div>
      <div className="error-text">
        <h3>{err.data}</h3>
        <p className="center-text">
          {err.status}: Page {err.statusText}
        </p>
      </div>

      <div>
        <button className="btn">
            <Link to="/">Back Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
