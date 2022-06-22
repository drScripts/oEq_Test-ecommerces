import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container120 from "./Container120";

const Container119 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 h-2 bg-gray-200">
      <Container120 />
    </div>
  );
};

export default Container119;
