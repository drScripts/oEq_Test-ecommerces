import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text77 from "./Text77";
import Container106 from "./Container106";

const Container105 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex-1">
      <Text77 />
      <Container106 />
    </div>
  );
};

export default Container105;
