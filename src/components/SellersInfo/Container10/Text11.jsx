import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text11 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white mt-4 font-bold text-lg">100</p>;
};

export default Text11;
