import React from "react";

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
            height: "470px",
            fontSize: "37px",
            fontWeight: 280,
            lineHeight: "75px",
            letterSpacing: "-0.015em",
            textAlign: "left",
            background:
              "linear-gradient(to right, rgba(2,48,71,0), rgba(2,48,71,0.07), rgba(2,48,71,0))",
            borderRadius: "30px 50px 91px 51px",
          }}
        >
          {props.CanotParagraphe}
        </p>
      </div>
      <div style={{ flexBasis: "50%" }}>
        <img
          style={{
            width: "726px",
            height: "491px",
            borderRadius: "50px 50px 191px 191px",
            opacity: "0px",
          }}
          src={props.imageUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default CanotParagraphe;
