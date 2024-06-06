import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa6";
import hand from "./Donation.jpg";
import "./DonationForm.css";

const InputField = ({ name, placeholder, value, onChange, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
);

const RecipientProfile = ({ photoSrc, userName }) => (
  <div className="recipient-profile">
    <img src={photoSrc} alt="Recipient Profile" />
    <span>{userName}</span>
  </div>
);

const DonationForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    date: "",
    email: "",
    password: "",
    cardNumber: "",
    amount: "",
    cvc: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [photoSrc, setPhotoSrc] = useState("");
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/")
    //   .then((response) => {
    //     setTitle(response.data.title);
    //     setUserName(response.data.userName);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/donate", {
          email: formData.email,
        });
        if (response.data.status === "success") {
          setMessage("Email sent successfully!");
          setError("");
        } else {
          setError(
            "There was an error, verify your information or try again later."
          );
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError(
            "There was an error, verify your information or try again later."
          );
        }
        setMessage("");
      }
    },
    [formData.email]
  );

  const handleChange = useCallback(
    (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    },
    [formData]
  );

  return (
    <div className="root">
      <div className="container1">
        <div className="photo1">
          <img src={hand} alt="" />
        </div>
        <div className="donation-form">
          <div className="title">{title}</div>
          <CgProfile
            style={{ fontSize: "6em", display: "block", textAlign: "left" }}
          />
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <InputField
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onBlur={(event) => setIsEmailValid(event.target.checkValidity())}
              onChange={handleChange}
            />

            <InputField
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={formData.cardNumber}
              required
              onChange={handleChange}
            />
            <div className="pay">
              <InputField
                type="password"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                required
                onChange={handleChange}
              />
              <InputField
                type="date"
                name="date"
                placeholder="  /  /  "
                value={formData.date}
                required
                onChange={handleChange}
              />
            </div>
            <InputField
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              required
              onChange={handleChange}
            />
            <FaDollarSign
              style={{
                marginLeft: "5px",
                transform: "translateX(+1800%) translateY(-250%)",
              }}
            />
            <input className="bottom" type="submit" value="Submit" />
          </form>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
