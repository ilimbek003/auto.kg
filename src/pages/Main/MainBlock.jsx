import React from "react";
import ByBrand from "../../components/ByBrand";
import Bodywork from "../../components/Bodywork";
import AboutCompany from "../../components/AboutCompany";
import Main from "../../components/Main";

const MainBlock = () => {
  return (
    <div>
      <Main />
      <ByBrand />
      <Bodywork />
      <AboutCompany />
    </div>
  );
};

export default MainBlock;
