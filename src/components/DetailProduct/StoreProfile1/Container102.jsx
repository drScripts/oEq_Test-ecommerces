import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text75 from "./Text75";
import Container103 from "./Container103";

const Container102 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex-1">
      <Text75 />
      <Container103 />
    </div>
  );
};

export default Container102;
