import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text89 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <p className="font-sans text-green-600 px-3 rounded-full py-1 font-medium bg-emerald-100 text-sm">
      Tersedia : 250
    </p>
  );
};

export default Text89;
