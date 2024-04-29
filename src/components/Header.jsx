import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav_left">
            <h1 className="logo">auto.kg</h1>
            <ul>
              <li>
                <a href="#">Поиск авто</a>
              </li>
              <li>
                <a href="#">Авто в наличии</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Аукцион</a>
              </li>
              <li>
                <a href="#">Для клиентов</a>
              </li>
            </ul>
          </div>
          <button className="plesonal-btn">Личный кабинет</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
