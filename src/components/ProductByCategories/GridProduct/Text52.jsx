import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text52 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-bold px-4 pt-3">TMA-2 HD Wireless</p>;
};

export default Text52;
