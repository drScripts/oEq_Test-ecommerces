import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text9 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans mt-4 text-lg font-bold">18 Items</p>;
};

export default Text9;
