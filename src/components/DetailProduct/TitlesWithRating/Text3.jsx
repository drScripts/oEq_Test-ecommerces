import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-medium">Review (86)</p>;
};

export default Text3;
