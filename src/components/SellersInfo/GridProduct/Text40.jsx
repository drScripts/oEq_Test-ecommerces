import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text40 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-xs">2.2</p>;
};

export default Text40;
