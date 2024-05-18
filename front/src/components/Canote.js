import "./Canote.css";

const Canote = (props) => {
  return (
    <div className="canote">
      <div className="canote-image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="canote-content">
        <div className="canote-title">
          <h1>{props.title}</h1>
        </div>
        <div className="canote-profile">
          <img src={props.profileImageUrl} alt="" />
          <h2>{props.ProfileName}</h2>
        </div>
        <div className="progres-bar">
          <div className="progres" style={{ width: `${props.percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Canote;