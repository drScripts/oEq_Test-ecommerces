import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="h-2 w-14 h-14"></div>;
};

export default Container1;
