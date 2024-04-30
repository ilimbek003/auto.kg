import React from "react";
import { make } from "../data";
import { useNavigate } from "react-router-dom";
const Bodywork = () => {
  const navigate = useNavigate();
  return (
    <div className="bodywork">
      <div className="container">
        <h1 className="ttitle">По кузову</h1>
        <div className="box-work">
          {make.slice(0, 6).map((el) => (
            <div>
              <img className="imgage" src={el.images} alt="" />
              <p className="prise">{el.prise}</p>
              <p className="dec">{el.title}</p>
              <p className="nwee">2020 / новый</p>
            </div>
          ))}
          <button
            className="custom-button blink-animate block"
            style={{ marginTop: "20px", cursor: "pointer", width: "250px" }}
            onClick={() => navigate("/body-work")}
          >
            <p className="search-brand-text">Cмотреть варианты</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bodywork;
