import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./change.css";

export default function Change() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { token } = useParams(); // Récupère le token depuis l'URL
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/resetPassword/${token}`,
        {
          Password: password,
          passwordConfirm: passwordConfirm,
        }
      );

      if (response.data.status === "success") {
        setMessage("Password has been reset successfully");
        setError("");
        setTimeout(() => {
          history.push("/login"); // Redirect to login page
        }, 2000);
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
    <div className="toutc">
      <FontAwesomeIcon className="clockkk" icon={faLock} />
      <p className="ptc">Change Your Password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          className="cp"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          type="password"
          className="cp"
          placeholder="Confirm Your New Password"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        <br />
        <input type="submit" className="cpp" value="Change Password" />
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
