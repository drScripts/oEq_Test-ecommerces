import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text10 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-lg text-gray-400">Following</p>;
};

export default Text10;
