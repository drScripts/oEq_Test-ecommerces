import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container124 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="bg-white h-2 bg-yellow-400 rounded-full w-3/4"></div>;
};

export default Container124;
