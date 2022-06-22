import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image11 from "./Image11";
import Container29 from "./Container29";

const Container28 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col w-60 bg-white rounded-xl shadow-lg">
      <Image11 />
      <Container29 />
    </div>
  );
};

export default Container28;
