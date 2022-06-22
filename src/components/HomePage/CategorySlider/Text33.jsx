import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text33 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return <p className="font-sans text-center mt-4">Gadget</p>;
};

export default Text33;
