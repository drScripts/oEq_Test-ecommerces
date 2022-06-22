import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text28 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-gray-400 mt-6">13 Jan 2021</p>;
};

export default Text28;
