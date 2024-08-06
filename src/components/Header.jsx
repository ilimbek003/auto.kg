import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="logo">
            auto.kg
          </NavLink>
          <div className="nav_left">
            <ul>
              <li>
                <NavLink to="/marks">Поиск авто</NavLink>
              </li>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
              <li>
                <a href="/contacts">Контакты</a>
              </li>
            </ul>
          </div>
          <button className="plesonal-btn" style={{width:"180px"}}>На связи</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
