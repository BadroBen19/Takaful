// Canote.js
import { Image, ProgressBar } from "react-bootstrap";
import "./Canote.css";
const Canote = (props) => {
  return (
    <div className="canote">
      <div className="canote-image">
        <Image src={props.imageUrl} />
      </div>
      <div className="canote-content">
        <h1>{props.title}</h1>
        <div className="canote-profile">
          <Image src={props.profileImageUrl} />
          <h2>{props.ProfileName}</h2>
        </div>
        <ProgressBar className="custom-progress-bar" now={props.percentage} />
      </div>
    </div>
  );
};

export default Canote;
