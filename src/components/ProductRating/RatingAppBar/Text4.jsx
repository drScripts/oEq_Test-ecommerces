import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text--lg font-medium">Review Product</p>;
};

export default Text4;
