import axios from "axios";
import React, { useState } from "react";
import phlog from "../image/1-removebg-preview .png";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
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
          <button className="bt111a">Login</button>
          <button className="bt222a">Create new account</button>
          <a className="forget" href="./Forgot">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  );
}
