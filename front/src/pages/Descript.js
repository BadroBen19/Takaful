import React from "react";
import { Link } from "react-router-dom";
import use from "../image/User-140.png";
import "./Descrip.css";

export default function Descript() {
  var usernamediaa = "User";
  var description =
    "I'm overwhelmed with gratitude for the generous donations I received for my fundraising campaign. Your support has made a significant difference in my life, and I'm thrilled to report that it has greatly helped me achieve my goals. Thank you again for your kindness and generosity!";

  return (
    <div className="toutdes">
      <div className="des">
        <div className="imn">
          <img src={use} alt="user" />
          <p className="name"> {usernamediaa} </p>
        </div>
        <p className="descrip"> {description}</p>
      </div>

      <div className="des">
        <div className="imn">
          <img src={use} alt="user" />
          <p className="name"> {usernamediaa} </p>
        </div>
        <p className="descrip"> {description}</p>
      </div>

      <div className="des">
        <div className="imn">
          <img src={use} alt="user" />
          <p className="name"> {usernamediaa} </p>
        </div>
        <p className="descrip"> {description}</p>
      </div>

      <div className="des">
        <div className="imn">
          <img src={use} alt="user" />
          <p className="name"> {usernamediaa} </p>
        </div>
        <p className="descrip"> {description}</p>
      </div>

      <Link to="/reviews">
        <button className="smore">See more..</button>
      </Link>
    </div>
  );
}
