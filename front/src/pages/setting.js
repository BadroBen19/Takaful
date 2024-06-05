import {
  faCircleExclamation,
  faCircleUser,
  faEnvelope,
  faFilePen,
  faGear,
  faGreaterThan,
  faLock,
  faUser,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import "./setting.css";

// SideNav component
const SideNav = ({ handleNavItemChange }) => {
  return (
    <div className="side-nav">
      <div className="titlenav">Settings</div>
      <div className="nav-items">
        <NavItem
          icon={<FontAwesomeIcon icon={faUserPen} />}
          name="Edit Profile"
          onClick={() => handleNavItemChange("Edit Profile")}
        />
        <NavItem
          icon={<FontAwesomeIcon icon={faFilePen} />}
          name="Share your story"
          onClick={() => handleNavItemChange("shareexp")}
        />
        <NavItem
          icon={<FontAwesomeIcon icon={faCircleExclamation} />}
          name="About"
          onClick={() => handleNavItemChange("About")}
        />
        <a href="/postuser">
          <NavItem
            icon={<FaHandHoldingHeart icon={FaHandHoldingHeart} />}
            name="see my poste"
            onClick={() => handleNavItemChange("see my poste ")}
          />{" "}
        </a>
        <button className="btnout"> sign out </button>
      </div>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, name, onClick }) => {
  return (
    <div className="nav-item" onClick={onClick}>
      <div className="iconnav">{icon}</div>
      <span className="namenav">{name}</span>
      {<FontAwesomeIcon icon={faGreaterThan} className="arrowww" />}
    </div>
  );
};

// EditProfile component
const EditProfile = () => {
  const [user, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSaveProfile = async () => {
    if (!validateProfileInputs()) {
      return;
    }

    const userProfileData = {
      user: user || undefined,
      email: email || undefined,
    };

    try {
      const token = localStorage.getItem("jwt");

      const profileResponse = await axios.patch(
        "http://localhost:5000/updateMe",
        userProfileData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (profileResponse.data.status !== "success") {
        throw new Error("Failed to save changes.");
      }

      setUserName("");
      setEmail("");
      setEmailError("");
    } catch (error) {
      console.error("Error saving changes:", error);
      setEmailError("Failed to save changes. Please try again later.");
    }
  };

  const handleSavePassword = async () => {
    if (!validatePasswordInputs()) {
      return;
    }

    const passwordData = {
      passwordCurrent: currentPassword,
      Password: newPassword,
      passwordConfirm: confirmNewPassword,
    };

    try {
      const token = localStorage.getItem("jwt");

      if (!token) {
        setPasswordError("No token found. Please log in.");
        return;
      }

      const passwordResponse = await axios.patch(
        "http://localhost:5000/updateMyPassword",
        passwordData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (passwordResponse.data.status !== "success") {
        throw new Error("Failed to update password.");
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordError("");
    } catch (error) {
      console.error("Error updating password:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setPasswordError(error.response.data.message);
      } else {
        setPasswordError("Failed to update password. Please try again later.");
      }
    }
  };

  const validateProfileInputs = () => {
    let isValid = true;

    if (email && !email.endsWith("@gmail.com")) {
      setEmailError("Email must end with '@gmail.com'.");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const validatePasswordInputs = () => {
    let isValid = true;

    if (
      (currentPassword || newPassword || confirmNewPassword) &&
      !(currentPassword && newPassword && confirmNewPassword)
    ) {
      setPasswordError("Please fill out all password fields.");
      isValid = false;
    } else if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      isValid = false;
    } else if (newPassword !== confirmNewPassword) {
      setPasswordError("New password and confirm new password must match.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleCancel = () => {
    setUserName("");
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className="edit-profile">
      <div className="profile-header">
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{ color: "rgba(217, 217, 217, 1)", fontSize: "5rem" }}
        />
        <span>{user}</span>
      </div>
      <div className="profile-info">
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FontAwesomeIcon icon={faUser} className="input-iconnn" />
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon icon={faEnvelope} className="input-iconnn" />
        </div>
        {emailError && <div className="error-message">{emailError}</div>}
        <button className="buttonnd" onClick={handleSaveProfile}>
          Change
        </button>
      </div>
      <div className="password-section">
        <div className="titlechange">
          <h2 style={{ color: "rgba(33, 158, 188, 1)", fontWeight: "bold" }}>
            Change Password
          </h2>
          <hr />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="input-iconnn" />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="input-iconnn" />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <FontAwesomeIcon icon={faLock} className="input-iconnn" />
        </div>
        {passwordError && <div className="error-message">{passwordError}</div>}
        <div className="buttons">
          <button className="buttonn" onClick={handleSavePassword}>
            Save
          </button>
          <button className="buttonn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ShareExperience = () => {
  const [story, setStory] = useState("");

  const handleChange = (event) => {
    setStory(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/api/share-experience",
        { story },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="share-experience">
      <p style={{ fontSize: "40px" }}>Share Your Experience</p>
      <p style={{ fontSize: "20px" }}>
        Here, we invite you to share your personal experiences with our
        platform. Your stories illustrate the real impact of donations and
        highlight the positive changes they bring about in people's lives.
        Whether it's about personal growth, overcoming challenges, or achieving
        goals, your testimonials contribute to a deeper understanding of the
        transformative power of generosity.
      </p>
      <div className="testimonial-form">
        <textarea
          placeholder="Enter your story..."
          value={story}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

// About component
const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Takaful</h1>
      <p className="about-description">
        Takaful is a community-driven platform dedicated to fostering generosity
        and supporting those in need. Our mission is to empower individuals like
        you to make a meaningful impact on society by contributing to various
        causes and initiatives.
      </p>
      <p className="about-description">
        With Takaful, you have the opportunity to engage in philanthropic
        efforts that align with your values and interests. Whether it's
        providing education to underprivileged children, offering relief to
        disaster-stricken communities, or supporting healthcare initiatives,
        your contributions can create positive change.
      </p>
      <p className="about-description">
        We believe in the power of collective giving to transform lives and
        build stronger, more resilient communities. By joining Takaful, you
        become part of a global network of individuals committed to making a
        difference and spreading hope.
      </p>
      <p className="about-description">
        Together, we can create a world where kindness knows no bounds. Join us
        in our mission to make the world a better place, one donation at a time.
      </p>
    </div>
  );
};

// MainPage component
const MainPage = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Settings");

  const handleNavItemChange = (itemName) => {
    setSelectedNavItem(itemName);
  };

  return (
    <div className="main-page">
      <SideNav handleNavItemChange={handleNavItemChange} />
      <div className="main-content">
        {selectedNavItem === "Edit Profile" ? (
          <EditProfile />
        ) : selectedNavItem === "shareexp" ? (
          <ShareExperience />
        ) : selectedNavItem === "About" ? (
          <About />
        ) : (
          <FontAwesomeIcon className="settingicon" icon={faGear} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
