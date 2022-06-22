import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Backimage from "./Backimage";
import Container10 from "./Container10";

const Container5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-3">
      <Backimage />
      <Container10 />
    </div>
  );
};

export default Container5;
