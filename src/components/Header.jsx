////////////////////////////////////////////////////////////////////////////////////\
import React, { useState } from "react";
import "aos/dist/aos.css"; // Import the AOS styles
import { Link } from "react-router-dom";

export default function Header() {
  const [headerShown, setHeaderShown] = useState(false);

  const headerToggle = () => {
    setHeaderShown((prev) => !prev);
  };
  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        headerShown ? "header-show" : ""
      }`}
    >
      <i
        className={`header-toggle d-xl-none bi ${
          headerShown ? "bi-x" : "bi-list"
        }`}
        onClick={headerToggle}
      ></i>

      <div className="profile-img">
        <img
          src="src/assets/img/my-profile-img.jpg"
          alt="notfound"
          className="img-fluid rounded-circle"
        />
      </div>

      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Usman Pasha</h1>
      </a>

      <div className="social-links text-center">
        <a
          href="https://www.linkedin.com/in/usman-pasha-b97341259"
          className="linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/UsmanPasha141"
          className="github"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+919742782575&text=Hello!"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="mailto:pashau293@gmail.com" target="_blank" rel="noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link to="/" className="active">
              <i className="bi bi-house navicon"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="bi bi-person navicon"></i> About
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i className="bi bi-images navicon"></i> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
