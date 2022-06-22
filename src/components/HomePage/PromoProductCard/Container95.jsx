import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container96 from "./Container96";

const Container95 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-block">
      <Container96 />
    </div>
  );
};

export default Container95;
