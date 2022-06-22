import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text75 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-medium">Shop Larson Electronic</p>;
};

export default Text75;
