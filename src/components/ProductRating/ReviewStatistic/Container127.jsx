import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container128 from "./Container128";

const Container127 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 bg-gray-200 h-2 rounded-full">
      <Container128 />
    </div>
  );
};

export default Container127;
