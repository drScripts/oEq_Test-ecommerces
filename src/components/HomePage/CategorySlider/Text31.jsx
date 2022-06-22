import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text31 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans mt-4 text-center">Gift</p>;
};

export default Text31;
