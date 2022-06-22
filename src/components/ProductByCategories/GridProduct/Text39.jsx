import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text39 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-orange-400 text-sm">Rp. 1.500.000</p>;
};

export default Text39;
