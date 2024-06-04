import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./InstructionsSent.css";

const InstructionsSent = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    // Fetch email from database (bdloh bl api )
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/email"
        );
        setEmail(response.data.email);
      } catch (error) {
        console.error("Error fetching email:", error);
      }
    };

    fetchEmail();
  }, []);

  const handleOkayClick = () => {
    history.push("/");
  };

  return (
    <div className="instructions-sent-container">
      <h2>Instructions Sent</h2>
      <p>
        We sent you instructions to change your password <strong>{email}</strong>
      </p>
      <p>Please check both your inbox and spam folder.</p>
      <button onClick={handleOkayClick}>Okay</button>
    </div>
  );
};

export default InstructionsSent;
