import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const HeaderUno = () => {
  return (
    <div className="header__container">
      <Link className="link" to={"/"}>
        <h1 className="logo">Gifty</h1>
      </Link>
      <h1 className="login">👤</h1>
    </div>
  );
};

export default HeaderUno;
