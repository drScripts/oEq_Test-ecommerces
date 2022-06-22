import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container14 from "./Container14";

const Container13 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-block">
      <Container14 />
    </div>
  );
};

export default Container13;
