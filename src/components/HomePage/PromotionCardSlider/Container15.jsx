import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container15 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="bg-white w-5 h-5"></div>;
};

export default Container15;
