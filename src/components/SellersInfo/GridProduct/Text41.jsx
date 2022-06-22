import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text41 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white text-xs">90 Reviews</p>;
};

export default Text41;
