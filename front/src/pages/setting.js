import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faUserPen,
  faGear,
  faGreaterThan,
  faUser,
  faEnvelope,
  faLock,
  faCircleUser,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
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

  const handleSaveChanges = async () => {
    if (!validateInputs()) {
      return;
    }

    const userProfileData = {
      user: user || undefined,
      email: email || undefined,
    };

    const passwordData = {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };

    try {
      if (currentPassword || newPassword || confirmNewPassword) {
        // Update password
        const passwordResponse = await fetch(
          "http://localhost:5000/updatePassword",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(passwordData),
          }
        );

        if (!passwordResponse.ok) {
          throw new Error("Failed to update password.");
        }
      }

      // Update user profile (username and email)
      const profileResponse = await fetch("http://localhost:5000/updateMe", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userProfileData),
      });

      if (!profileResponse.ok) {
        throw new Error("Failed to save changes.");
      }

      // Reset form and error messages
      setUserName("");
      setEmail("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setEmailError("");
      setPasswordError("");
    } catch (error) {
      console.error("Error saving changes:", error);
      setPasswordError("Failed to save changes. Please try again later.");
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (email && !email.endsWith("@gmail.com")) {
      setEmailError("Email must end with '@gmail.com'.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (
      (currentPassword || newPassword || confirmNewPassword) &&
      !(currentPassword && newPassword && confirmNewPassword)
    ) {
      setPasswordError("Please fill out all password fields.");
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
      </div>
      <button className="buttonnd" onClick={handleSaveChanges}>
        Save
      </button>
      <div className="password-section">
        <div className="titlechange">
          <h2 style={{ color: "rgba(33, 158, 188, 1)", fontWeight: "bold" }}>
            Change Password
          </h2>{" "}
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
      </div>
      <div className="buttons">
        <button className="buttonn" onClick={handleSaveChanges}>
          Change
        </button>
        <button className="buttonn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

// ShareExperience component
const ShareExperience = () => {
  const [story, setStory] = useState("");

  const handleChange = (event) => {
    setStory(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/share-experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story }),
      });
      const data = await response.json();
      console.log(data);
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
