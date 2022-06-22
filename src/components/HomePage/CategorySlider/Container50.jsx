import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image22 from "./Image22";

const Container50 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white rounded-xl flex items-center justify-center w-20 h-20 bg-orange-100">
      <Image22 />
    </div>
  );
};

export default Container50;
