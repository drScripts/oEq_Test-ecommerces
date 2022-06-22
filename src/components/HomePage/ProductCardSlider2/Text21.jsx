import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text21 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white text-xs">2.5</p>;
};

export default Text21;
