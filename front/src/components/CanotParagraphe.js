const CanotParagraphe = (props) => {
  return (
    <div
      style={{
        margin: "50px 80px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Set both paragraph and image to have a flexBasis of 50% */}
      <div style={{ flexBasis: "50%", paddingRight: "20px" }}>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "35px",
            fontWeight: 400,
            lineHeight: "74px",
            letterSpacing: "-0.015em",
            textAlign: "left",
            background:
              "linear-gradient(to right, rgba(2,48,71,0), rgba(2,48,71,0.07), rgba(2,48,71,0))",
            borderRadius: "30px 50px 91px 51px",
            height: "50%",
          }}
        >
          {props.CanotParagraphe}
        </p>
      </div>
      <div style={{ flexBasis: "50%" }}>
        <img
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "50px 50px 191px 191px",
          }}
          src={props.imageUrl}
          alt=""
        />
      </div>
    </div>
  );
};
export default CanotParagraphe;
