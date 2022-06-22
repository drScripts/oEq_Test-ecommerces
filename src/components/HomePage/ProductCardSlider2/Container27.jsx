import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container28 from "./Container28";

const Container27 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-block">
      <Container28 />
    </div>
  );
};

export default Container27;
