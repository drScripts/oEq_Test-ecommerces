import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image24 from "./Image24";

const Container56 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="rounded-xl flex items-center justify-center w-20 h-20 bg-violet-100">
      <Image24 />
    </div>
  );
};

export default Container56;
