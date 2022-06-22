import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans flex-1 text-gray-400">Search Priduct Name</p>;
};

export default Text1;
