import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image23 from "./Image23";

const Container53 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="rounded-xl flex items-center justify-center w-20 h-20 bg-yellow-100">
      <Image23 />
    </div>
  );
};

export default Container53;
