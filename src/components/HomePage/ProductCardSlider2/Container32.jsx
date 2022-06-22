import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container33 from "./Container33";

const Container32 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-block">
      <Container33 />
    </div>
  );
};

export default Container32;
