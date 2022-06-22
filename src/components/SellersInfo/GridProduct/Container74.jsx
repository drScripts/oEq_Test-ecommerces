import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text48 from "./Text48";
import Text49 from "./Text49";
import Container75 from "./Container75";

const Container74 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="p-4">
      <Text48 />
      <Text49 />
      <Container75 />
    </div>
  );
};

export default Container74;
