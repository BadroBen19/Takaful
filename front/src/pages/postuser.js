import "@fortawesome/fontawesome-free/css/all.min.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Correct import of jwt-decode
import React, { useEffect, useState } from "react";
import "./postuser.css";

const Donation = ({ imageUrl, title, description }) => {
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState(null);

  const [showShareModal, setShowShareModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken.id);
          setUserId(decodedToken.id);
          const response = await axios.get(
            `http://localhost:5000/getUserById/${decodedToken.id}`
          );
          setUserData(response.data);
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const amountPercentage = userData.target
    ? (userData.amount * 100) / userData.target
    : 0;

  const openShareModal = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const openReportModal = () => {
    setShowReportModal(true);
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleSendMessage = () => {
    console.log("Message to admin:", message);
    closeContactModal();
  };

  console.log(imageUrl);
  console.log(userData); // Log userData to check its content

  return (
    <div className="post-container">
      <div className="lfog">
        <div className="left-container">
          {userData.image && userData.image[0] ? (
            <img
              src={`http://localhost:5000/images/${userData.image[0]}`}
              alt="There is no picture!"
              className="valid-picture"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>
        <div className="right-container">
          <div className="post-info">
            <p
              style={{
                fontSize: "1.7rem",
                textTransform: "capitalize",
                margin: "10px",
                fontWeight: "bold",
                color: "rgba(2, 48, 71, 1)",
              }}
              className="post-title"
            >
              {userData.Title || "Title not available"}
            </p>
            <div className="user-info">
              <FontAwesomeIcon className="user-icon" icon={faUser} />

              <span
                className="username"
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(2, 48, 71, 1)",
                  textTransform: "capitalize",
                }}
              >
                {userData.user || "Username not available"}
              </span>
            </div>
            <div className="amount-info">
              <span
                className="amount"
                style={{
                  fontSize: "1.4rem",
                  color: "rgba(2, 48, 71, 1)",
                  fontWeight: "bold",
                }}
              >
                {userData.amount !== undefined ? `${userData.amount} $` : ""}
              </span>
              <span
                className="target"
                style={{ fontSize: "1rem", color: "rgba(2, 48, 71, 1)" }}
              >
                {userData.target !== undefined ? `${userData.target}` : ""}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${amountPercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="actions2">
            <a href="/sharexp">
              <button className="btnshar"> Share reviews </button>
            </a>
            <button className="share-btn2" onClick={openShareModal}>
              <i
                className="fa-solid fa-share-from-square"
                style={{ color: "rgba(33, 158, 188, 1)", fontSize: "1.5em" }}
              ></i>
              <span
                style={{
                  color: "rgba(33, 158, 188, 1)",
                  textTransform: "capitalize",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                Share
              </span>
            </button>
            <button className="cad" onClick={openContactModal}>
              Contact admin
            </button>

            {showShareModal && (
              <div id="shareModal" className="modal">
                <div className="contenuu">
                  <span className="closeshare" onClick={closeShareModal}>
                    &times;
                  </span>
                  <h3
                    className="shariha"
                    style={{
                      textAlign: "center",
                      margin: "35px 6px 4px 4px ",
                      color: "rgba(2, 48, 71, 1)",
                    }}
                  >
                    Share it now and spread the act of kindness with others!
                  </h3>
                  <div className="social-media-list">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-instagram social-media-icon"> </i>
                    </a>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-telegram social-media-icon"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-facebook-f social-media-icon"> </i>
                    </a>
                    <a
                      href="https://web.whatsapp.com/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-whatsapp social-media-icon"></i>
                    </a>
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-tiktok social-media-icon"></i>
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className="fab fa-twitter social-media-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {showReportModal && (
              <div id="reportModal" className="diaad">
                <div className="contenuu">
                  <span className="closereport" onClick={closeReportModal}>
                    &times;
                  </span>

                  <div className="containerta3problem">
                    <h2
                      className="reportiha"
                      style={{
                        textAlign: "center",
                        margin: "35px 6px 4px 4px ",
                        color: "rgba(2, 48, 71, 1)",
                      }}
                    >
                      Select your problem:
                    </h2>

                    <div className="checkbox-container">
                      <div className="checkbox-column">
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem1"
                            name="problem1"
                          />
                          <label htmlFor="problem1">fradulent activities</label>
                        </div>
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem2"
                            name="problem2"
                          />
                          <label htmlFor="problem2">Lack of transparency</label>
                        </div>
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem3"
                            name="problem3"
                          />
                          <label htmlFor="problem3">Misrepresentation</label>
                        </div>
                      </div>
                      <div className="checkbox-column">
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem4"
                            name="problem4"
                          />
                          <label htmlFor="problem4">Ethical Concerns</label>
                        </div>
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem5"
                            name="problem5"
                          />
                          <label htmlFor="problem5">Privacy Issues</label>
                        </div>
                        <div className="prob">
                          <input
                            type="checkbox"
                            id="problem6"
                            name="problem6"
                          />
                          <label htmlFor="problem6">
                            Inappropriate Content
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="submit-buttonnn"
                      onClick={closeReportModal}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {showContactModal && (
              <div id="contactModal" className="modal">
                <div className="contenuu">
                  <span className="closecontact" onClick={closeContactModal}>
                    &times;
                  </span>
                  <h3
                    className="contactadmin"
                    style={{
                      textAlign: "center",
                      margin: "35px 6px 4px 4px ",
                      color: "rgba(2, 48, 71, 1)",
                    }}
                  >
                    Contact Admin
                  </h3>
                  <textarea
                    className="message-box"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message here..."
                    style={{
                      width: "100%",
                      height: "100px",
                      padding: "10px",
                      fontSize: "1.5rem",
                      borderRadius: "5px",
                      border: "1px solid rgba(2, 48, 71, 1)",
                      marginBottom: "10px",
                    }}
                  ></textarea>
                  <button className="send-button" onClick={handleSendMessage}>
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="description-container">
        <h2
          className="description-title"
          style={{
            color: "rgba(2, 48, 71, 1)",
            fontWeight: "bold",
            marginBottom: "7px",
          }}
        >
          Description
        </h2>
        <p
          className="description"
          style={{
            color: "rgba(2, 48, 71, 1)",
            fontSize: "1rem",
            fontWeight: "lighter",
            marginTop: "10px",
          }}
        >
          {userData.description || "No description available"}
        </p>
      </div>
    </div>
  );
};

export default Donation;
