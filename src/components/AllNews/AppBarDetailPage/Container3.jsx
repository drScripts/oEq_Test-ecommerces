import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="w-7 h-7"></div>;
};

export default Container3;
