import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text23 from "./Text23";
import Container39 from "./Container39";

const Container38 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-1/2 flex flex-col justify-center">
      <Text23 />
      <Container39 />
    </div>
  );
};

export default Container38;
