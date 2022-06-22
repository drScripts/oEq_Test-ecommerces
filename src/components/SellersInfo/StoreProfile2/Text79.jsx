import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text79 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-sm font-medium">4.5</p>;
};

export default Text79;
