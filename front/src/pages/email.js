import "./email.css";
import React from "react";

export default function Email() {
  const emailname = "example@dz";
  return (
    <div className="emailsent">
      <p className="t1">Instructions Sent</p>
      <p className="pr1">We sent instructions to change your</p>
      <p className="pr1">password to <span className="email-name">{emailname}</span></p>
      <p className="pr1">please check both your inbox and spam</p>
      <p className="pr1">folder</p>
      <a href="/">
        <button className="ok">Okay</button>
      </a>
    </div>
  );
}
