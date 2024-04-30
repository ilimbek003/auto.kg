import React from "react";
import { make } from "../data";

const PopularBrands = () => {
  return (
    <div className="popular_brands">
      <div className="container">
        <h1 className="ttitle">ПОПУЛЯРНЫЕ МАРКИ</h1>
        <div className="box-wrap">
          {make.map((el, indx) => (
            <div className="box" key={indx}>
              <p className="mark-list-item">
                <b>{el.title} </b>
                <span>({el.count})</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
