import React from "react";
import ByBrand from "../../components/ByBrand";
import Bodywork from "../../components/Bodywork";

const MainBlock = () => {
  return (
    <div>
      <ByBrand />
      {/* <PopularBrands/> */}
      <Bodywork />
    </div>
  );
};

export default MainBlock;
