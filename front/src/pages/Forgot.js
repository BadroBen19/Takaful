import axios from "axios";
import React, { useState } from "react";
import Email from "./email";
import "./forgot.css";

export default function Forgot() {
  const [fadeOut, setFadeOut] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/forgotPassword",
        { Email: email }
      );

      if (response.data.status === "success") {
        setMessage("Token sent to email!");
        setError("");
        setFadeOut(true);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
      setMessage("");
    }
  };

  return (
    <div className="forg1">
      <h1 className="tfg1">Forgot Your Password?</h1>
      <p className="text1">
        Enter your email to receive a password reset link.
      </p>
      <input
        type="email"
        id="input"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <br></br>
      <button onClick={handleButtonClick} className="rpass">
        Reset Password
      </button>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      {fadeOut && <Email />}
    </div>
  );
}
