import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text64 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-sm text-orange-400">Rp. 1.400.000</p>;
};

export default Text64;
