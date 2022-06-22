import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container120 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="h-2 bg-yellow-400 rounded-full w-full"></div>;
};

export default Container120;
