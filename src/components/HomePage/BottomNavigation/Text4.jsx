import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-sm text-center">Profile</p>;
};

export default Text4;
