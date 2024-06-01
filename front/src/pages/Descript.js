import React from "react";
import { Link } from "react-router-dom";
import use from "../image/User-140.png";
import "./Descrip.css";

export default function Descript() {
  var usernamediaa = "abda9a 3imocha";
  var description =
    "Galk ki nsmiw wladna gollha wlad lklbat lvahvujhc cbeljg vjgvzeul zvzuejgfz zedgzevdz zvzeudgz hzdvgzeude jegufufgef gefhgfu jerfgerulgerj trjghtrgurhg rrnjthjrthirth thjtjhrt rtkihhrtot rtkgrhtg rtkrthtyh tyhktyhj,yth tyhlthth (m(hty 41552656 52 6";

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
