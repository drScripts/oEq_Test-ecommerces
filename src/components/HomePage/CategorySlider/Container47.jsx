import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image21 from "./Image21";

const Container47 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="rounded-xl flex items-center justify-center w-20 h-20 bg-green-100">
      <Image21 />
    </div>
  );
};

export default Container47;
