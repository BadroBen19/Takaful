import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import phlog from "../image/1-removebg-preview .png";
import "./login.css";
export default function Login() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const history = useHistory();
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
      console.log(response.data.token);
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      console.log(localStorage);
      history.push("/services");

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
          <a class="forget" href="./Forgot">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  );
}
