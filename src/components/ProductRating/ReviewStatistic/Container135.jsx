import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container136 from "./Container136";

const Container135 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 bg-white h-2 bg-gray-200 rounded-full">
      <Container136 />
    </div>
  );
};

export default Container135;
