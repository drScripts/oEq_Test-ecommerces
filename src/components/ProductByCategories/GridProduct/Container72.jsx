import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image42 from "./Image42";
import Container74 from "./Container74";

const Container72 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white rounded-xl">
      <Image42 />
      <Container74 />
    </div>
  );
};

export default Container72;
