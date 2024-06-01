import { Link } from "react-router-dom";
import "./Canote.css";

const Canote = (props) => {
  return (
    <div className="canote">
      <Link to={`/donation/${props._id}`} className="canote-link">
        <div className="canote-image">
          <img
            src={"http://localhost:5000/images/" + props.imageUrl}
            alt={props.title}
          />
        </div>
        <div className="canote-content">
          <div className="canote-title">
            <h1>{props.title}</h1>
          </div>
          <div className="canote-profile">
            <img src={props.profileImageUrl} alt={props.ProfileName} />
            <h2>{props.ProfileName}</h2>
          </div>
          <div className="progres-bar">
            <div
              className="progres"
              style={{ width: `${props.percentage}%` }}
            ></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Canote;
