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

  return (
    <p className="font-sans text-xs text-white">Periode Mei - Agustus 2021</p>
  );
};

export default Text4;
