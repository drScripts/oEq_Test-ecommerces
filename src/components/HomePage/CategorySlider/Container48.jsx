import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container49 from "./Container49";

const Container48 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-block">
      <Container49 />
    </div>
  );
};

export default Container48;
