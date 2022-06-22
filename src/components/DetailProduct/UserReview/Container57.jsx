import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container58 from "./Container58";
import Container59 from "./Container59";
import Container61 from "./Container61";
import Text37 from "./Text37";

const Container57 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex-1">
      <Container58 />
      <Container59 />
      <Container61 />
      <Text37 />
    </div>
  );
};

export default Container57;
