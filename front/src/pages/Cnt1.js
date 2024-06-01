import React from "react";
import { Link } from "react-router-dom";
import "./Cnt1.css";
import imc1 from "../image/2.1.png";
import imc2 from "../image/2.2.png";
import imc3 from "../image/2.3.png";
import imc4 from "../image/2.4.png";
import imc5 from "../image/2.5.png";
import imc6 from "../image/2.6.png";
import imc7 from "../image/2.7.jpeg";

export default function Cnt1() {
  return (
    <>
      <div className="cnt22">
        <h1 className="ttt1">Empower Change Start Donating Today</h1>
        <div className="hd1">
          <div className="col"></div>
          <p className="prgc11">
            Begin your journey to make a difference by directly <br />
            contributing to individuals in need. Whether you're <br />
            seeking to provide personal support or contribute to a <br />
            specific cause,{" "}
            <span className="gras">
              Please select the category in which you <br /> would like to make
              a donation:
            </span>
          </p>
        </div>
      </div>

      <div className="cnt3">
        <Link to="/c1">
          <div className="c1">
            <img src={imc1} className="imc1" />
            <h1 className="tc11">
              Disease research <br /> and treatment
            </h1>
          </div>
        </Link>
        <Link to="/c2">
          <div className="c1">
            <img src={imc2} className="imc2" />
            <h1 className="tc1">
              Providing aid to the <br /> impoverished
            </h1>
          </div>
        </Link>
        <Link to="/c3">
          <div className="c1">
            <img src={imc3} className="imc2" />
            <h1 className="tc1">
              Supporting victims <br /> of natural disasters
            </h1>
          </div>
        </Link>
        <Link to="/c4">
          <div className="c1">
            <img src={imc4} className="imc2" />
            <h1 className="tc1">
              Funding scientific <br /> research
            </h1>
          </div>
        </Link>
        <Link to="/c5">
          <div className="c1">
            <img src={imc5} className="imc2" />
            <h1 className="tc1">
              Providing education <br /> for underprivileged <br /> groups
            </h1>
          </div>
        </Link>
        <Link to="/c6">
          <div className="c1">
            <img src={imc6} className="imc3" />
            <h1 className="tc11">
              Supporting social <br /> programs for <br />
              disadvantaged <br />
              children
            </h1>
          </div>
        </Link>
        <Link to="/c7">
          <div className="c1">
            <img src={imc7} className="imc2" />
            <h1 className="tc1">Other causes...</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
