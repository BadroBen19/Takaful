import "./Review.css";
const Review = (props) => {
  return (
    <div
      style={{
        width: "641.47px",
        height: "425px",
        top: "961px",
        left: "129.53px",
        background: "rgba(253, 231, 214, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "20px",
        margin: "20px",
      }}
    >
      <div className="userInfos">
        <img src={props.imgUrl} />
        <h1>{props.userName}</h1>
      </div>
      <p className="reviewText">{props.reviewText}</p>
    </div>
  );
};
export default Review;
