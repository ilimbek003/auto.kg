import React from "react";
import { make } from "../data";

const ByBrand = () => {
  return (
    <div className="by_brand">
      <div className="container">
        <h1 className="ttitle">По маркам</h1>
        <div className="brand_wrap">
          {make.map((el, indx) => (
            <div className="brand" key={indx}>
              <img src={el.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByBrand;
