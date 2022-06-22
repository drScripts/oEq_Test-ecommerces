import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container43 from "./Container43";
import Text28 from "./Text28";

const Container42 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="justify-between flex flex-col">
      <Container43 />
      <Text28 />
    </div>
  );
};

export default Container42;
