import React from "react";
import { make } from "../data";

const BodyWork = () => {
  return (
    <div className="bodywork">
      <div className="container">
        <h1 className="ttitle">По кузову</h1>
        <div className="box-work">
          {make.map((el) => (
            <div>
              <img className="imgage" src={el.images} alt="" />
              <p className="prise">{el.prise}</p>
              <p className="dec">{el.title}</p>
              <p className="nwee">2020 / новый</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyWork;
