import React from "react";
import ByBrand from "../../components/ByBrand";
import Bodywork from "../../components/Bodywork";
import AboutCompany from "../../components/AboutCompany";
import Main from "../../components/Main";

const MainBlock = ({ cars, brands }) => {
  return (
    <div>
      <Main />
      <ByBrand brands={brands} />
      <Bodywork cars={cars} />
      <AboutCompany />
    </div>
  );
};

export default MainBlock;
