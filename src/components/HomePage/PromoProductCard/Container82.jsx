import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container83 from "./Container83";
import Container85 from "./Container85";

const Container82 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col bg-white rounded-xl shadow-lg w-60">
      <Container83 />
      <Container85 />
    </div>
  );
};

export default Container82;
