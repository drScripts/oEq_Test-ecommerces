import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text52 from "./Text52";
import Text53 from "./Text53";
import Container79 from "./Container79";

const Container78 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2">
      <Text52 />
      <Text53 />
      <Container79 />
    </div>
  );
};

export default Container78;
