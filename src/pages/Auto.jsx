import React from "react";
import ByBrand from "../components/ByBrand";
import PopularBrands from "../components/PopularBrands";

const Auto = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <ByBrand />
      <PopularBrands />
    </div>
  );
};

export default Auto;
