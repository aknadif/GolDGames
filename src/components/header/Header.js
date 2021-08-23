import React from "react";
import "./Header.css";
import Logo from "../../assets/img/Logo2.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light position-relative">
        <a className="navbar-brand position-absolute top-50 start-50 translate-middle" href="home">
          <img src={Logo} alt="Logo" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
