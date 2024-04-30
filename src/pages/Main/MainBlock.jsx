import React from "react";
import ByBrand from "../../components/ByBrand";
import Bodywork from "../../components/Bodywork";
import AboutCompany from "../../components/AboutCompany";

const MainBlock = () => {
  return (
    <div>
      <ByBrand />
      {/* <PopularBrands/> */}
      <Bodywork />
      <AboutCompany />
    </div>
  );
};

export default MainBlock;
