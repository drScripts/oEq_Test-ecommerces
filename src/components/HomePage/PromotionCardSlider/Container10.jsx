import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container11 from "./Container11";
import Image3 from "./Image3";
import Container12 from "./Container12";

const Container10 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-80 flex relative">
      <Container11 />
      <Image3 />
      <Container12 />
    </div>
  );
};

export default Container10;
