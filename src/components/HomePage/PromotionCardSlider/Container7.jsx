import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container7 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="bg-white w-20"></div>;
};

export default Container7;
