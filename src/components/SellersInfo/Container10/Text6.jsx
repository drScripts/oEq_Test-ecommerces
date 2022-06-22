import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text6 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-lg text-gray-400">Followes</p>;
};

export default Text6;
