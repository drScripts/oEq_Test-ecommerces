import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-xs">3.4</p>;
};

export default Text5;
