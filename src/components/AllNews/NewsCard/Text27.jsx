import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text27 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans">Agar tetap kinclong, bodi motor ten...</p>;
};

export default Text27;
