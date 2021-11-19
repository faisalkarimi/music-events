import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        <Link to="/about">About This Project</Link>
      </p>
    </footer>
  );
};

export default Footer;
