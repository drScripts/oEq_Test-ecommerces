import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text26 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans font-medium text-xl">The last news</p>;
};

export default Text26;
