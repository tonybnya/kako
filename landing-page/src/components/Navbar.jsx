import React from "react";
import logo from "/assets/logo/logo.png";
import batman from "/assets/logo/batman.png";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="KaKo logo" className="logo" />
      <img src={batman} alt="Batman logo" className="logo" />
    </div>
  );
};

export default Navbar;
