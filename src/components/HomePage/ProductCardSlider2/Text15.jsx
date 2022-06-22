import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text15 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-lg font-medium">Skincare Set</p>;
};

export default Text15;
