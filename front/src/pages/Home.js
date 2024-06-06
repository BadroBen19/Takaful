import React, { useEffect, useState } from "react";
import chib from "../image/1 bel backg.png";
import sand from "../image/3 belbackg.png";
import bz from "../image/4 back.png";
import Cnt1 from "./Cnt1";
import Descript from "./Descript";
import "./Home.css";
import Newpage from "./Newpage";
import Newpage2 from "./Newpage2";

const Home = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [diaa, setdiaa] = useState(false);
  const [tokenPresent, setTokenPresent] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setTokenPresent(true);
    }
  }, []);

  const handleButtonClick = () => {
    setFadeOut(!fadeOut);
  };

  const handl2 = () => {
    setdiaa(!diaa);
  };

  return (
    <div className="page1">
      <div className="inter">
        <div className="ro">
          <p className="t1z"> Building a</p>
          <p className="t1z">Better</p>
          <p className="t1z">Future Through </p>
          <p className="t1a">Giving</p>
          <p className="ppp1">
            Join us in creating a ripple of change, help <br /> those in need by
            donating or receiving <br /> donations.
          </p>
          <div className="bot">
            <div>
              {!tokenPresent && (
                <button onClick={handleButtonClick} id="bth1">
                  Receive Donation
                </button>
              )}
              <div className={fadeOut ? "fade-out" : "fade-in"}></div>
              {fadeOut && <Newpage />}
            </div>
            <a href="#cat">
              <button id="bth2"> Donate Now</button>
            </a>
          </div>
        </div>
        <div className="in2">
          <img src={chib} className="img1" alt="Chib" />
        </div>
      </div>
      <div id="cat">
        <Cnt1 />
      </div>
      <div className="inter2">
        <div className="ror">
          <p className="t21">
            Introducing Our <br />
            Specially Designed <br />
            Donation Center just
            <br />
            for you!
          </p>
          <p className="pp21">
            Easily gather donations quickly <br />
            through our donation pot creation <br />
            feature..
          </p>
          <div className="bot">
            <div>
              {!tokenPresent && (
                <button onClick={handl2} id="bbt1">
                  Receive Donation
                </button>
              )}
              <div className={diaa ? "fade-out" : "fade-in"}></div>
              {diaa && <Newpage2 />}
            </div>
          </div>
        </div>
        <div className="diaaf">
          <img src={sand} className="mpi" alt="Sand" />
        </div>
      </div>
      <div className="inter2">
        <div className="ror2">
          <p className="t212">
            Life-Altering <br />
            Testimonies:Stories <br />
            of Transformation
            <br />
            for you!
          </p>
          <div></div>
        </div>
        <div className="diaaf">
          <img src={bz} className="mpi2" alt="BZ" />
        </div>
      </div>
      <Descript />
    </div>
  );
};

export default Home;
