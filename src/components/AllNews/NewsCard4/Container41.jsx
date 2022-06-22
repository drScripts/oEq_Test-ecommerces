import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container42 from "./Container42";

const Container41 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 flex-1">
      <Container42 />
    </div>
  );
};

export default Container41;
