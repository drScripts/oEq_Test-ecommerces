import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Link1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <a className="font-sans text-blue-400">See All</a>;
};

export default Link1;
