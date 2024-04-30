import React, { useState } from "react";
import { make } from "../data";
import { IoIosArrowForward } from "react-icons/io";


const ByBrand = () => {
  const [state, setState] = useState(false);

  return (
    <div className="by_brand">
      <div className="container">
        <h1 className="ttitle">По маркам</h1>
        <div className={state ? "brand_wrap" : "brand_wrap_active"}>
          {make.map((el, indx) => (
            <div className="brand" key={indx}>
              <img src={el.img} />
            </div>
          ))}
        </div>
        <button
          className="custom-button blink-animate block"
          style={{ marginTop: "20px", cursor: "pointer", width: "250px" }}
          onClick={() => setState(!state)}
        >
          <p className="search-brand-text">
            {state ? <b>Скрыть</b> : <b>Еще</b>}
            <IoIosArrowForward size={25} color="#fff" />
          </p>
        </button>
      </div>
    </div>
  );
};

export default ByBrand;
