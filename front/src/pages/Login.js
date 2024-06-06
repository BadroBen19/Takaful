import axios from "axios";
import React, { useState } from "react";
import phlog from "../image/1-removebg-preview .png";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const [error, setError] = useState(""); // État pour gérer les erreurs

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialisez l'erreur avant de soumettre

    try {
      const formDataToSend = {
        Email: formData.Email,
        Password: formData.Password,
      };

      const response = await axios.post(
        "http://localhost:5000/login",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log({ response });

      if (!response.data.token) return;

      const token = response.data.token;
      localStorage.setItem("jwt", token);
      console.log(localStorage);
      console.log(token)

      // Redirigez vers la page d'accueil
      window.location.href = "/";
      // Rechargez la page après une courte pause pour s'assurer que la redirection s'est produite
      setTimeout(() => {
        window.location.reload();
      }, 100);

      // Effacez les champs de formulaire
      setFormData({
        Email: "",
        Password: "",
      });
    } catch (error) {
      setError("Invalid email or password. Please try again."); // Met à jour l'état de l'erreur
      console.error(error.response.data);
    }
  };

  return (
    <>
      <div className="containerd">
        <div className="photod">
          <img src={phlog} className="ph" />
        </div>
        <form className="id" onSubmit={submitHandler}>
          <input
            type="email"
            id="input1"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          
          <input
            type="password"
            id="input2"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleChange}
          />

          {error && ( // Affiche le message d'erreur s'il y en a un
            <div className="error-message">
              {error}
              <button type="button" onClick={() => setError("")}>
                Retry
              </button>{" "}
              {/* Bouton pour réinitialiser l'erreur */}
            </div>
          )}

          <button className="bt111a">Login</button>
          <button
            className="bt222a"
            onClick={() => (window.location.href = "/signup")}
          >
            Create new account
          </button>

          <a className="forget" href="./Forgot">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  );
}
