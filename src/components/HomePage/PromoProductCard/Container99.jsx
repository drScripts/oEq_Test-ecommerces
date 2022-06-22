import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text69 from "./Text69";
import Text70 from "./Text70";
import Text71 from "./Text71";
import Container100 from "./Container100";

const Container99 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2 p-4">
      <Text69 />
      <Text70 />
      <Text71 />
      <Container100 />
    </div>
  );
};

export default Container99;
