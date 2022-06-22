import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text81 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans mt-2">90 Reviews</p>;
};

export default Text81;
