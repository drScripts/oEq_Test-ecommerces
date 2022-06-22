import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image14 from "./Image14";
import Container34 from "./Container34";

const Container33 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col w-60 bg-white rounded-xl shadow-lg">
      <Image14 />
      <Container34 />
    </div>
  );
};

export default Container33;
