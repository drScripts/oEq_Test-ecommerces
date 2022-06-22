import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text91 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <p className="font-sans mt-2 text-red-400 font-medium">Rp 1.500.000</p>
  );
};

export default Text91;
