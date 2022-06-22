import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text36 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-gray-400">2 Minggu yang lalu</p>;
};

export default Text36;
