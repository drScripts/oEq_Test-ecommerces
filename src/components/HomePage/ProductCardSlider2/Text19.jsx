import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text19 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white font-medium text-lg">NIKE Shoes</p>;
};

export default Text19;
