import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <p className="font-sans font-bold text-white text-lg">
      Gratis Onkir Selama PPKM!
    </p>
  );
};

export default Text5;
