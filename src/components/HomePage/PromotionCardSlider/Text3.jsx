import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <p className="font-sans text-lg text-white font-bold">
      Gratis Onkir Selama PPKM!
    </p>
  );
};

export default Text3;
