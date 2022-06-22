import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text69 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-medium text-lg">TMA-2 HD Wireless</p>;
};

export default Text69;
