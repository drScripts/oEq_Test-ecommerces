import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image8 from "./Image8";
import Container24 from "./Container24";

const Container23 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col w-60 bg-white rounded-xl shadow-lg">
      <Image8 />
      <Container24 />
    </div>
  );
};

export default Container23;
