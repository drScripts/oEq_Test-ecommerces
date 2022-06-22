import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text35 from "./Text35";
import Container63 from "./Container63";

const Container62 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex-1">
      <Text35 />
      <Container63 />
    </div>
  );
};

export default Container62;
