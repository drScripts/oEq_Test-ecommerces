import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text8 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white text-lg text-gray-400">Products</p>;
};

export default Text8;
