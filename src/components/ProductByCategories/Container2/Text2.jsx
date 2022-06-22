import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans bg-white font-bold text-2xl">Gadget</p>;
};

export default Text2;
