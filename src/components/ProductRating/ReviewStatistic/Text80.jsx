import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text80 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-bold text-xl">4.5 / 5</p>;
};

export default Text80;
