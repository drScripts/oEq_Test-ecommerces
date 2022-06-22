import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text32 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans mt-4 text-center">Fashion</p>;
};

export default Text32;
