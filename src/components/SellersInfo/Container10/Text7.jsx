import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text7 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans mt-4 font-bold text-lg">2.7 K</p>;
};

export default Text7;
