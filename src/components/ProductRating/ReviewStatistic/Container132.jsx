import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Container132 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <div className="h-2 bg-yellow-200 w-1/4 bg-yellow-400"></div>;
};

export default Container132;
