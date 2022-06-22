import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container21 from "./Container21";
import Container27 from "./Container27";
import Container32 from "./Container32";

const ProductCardSlider = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" p-4 inline-flex overflow-x-scroll gap-4 w-full">
      <Container21 />
      <Container27 />
      <Container32 />
    </div>
  );
};

export default ProductCardSlider;
