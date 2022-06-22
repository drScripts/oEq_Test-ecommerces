import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image4 from "./Image4";

const Container5 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white w-full p-4">
      <Image4 />
    </div>
  );
};

export default Container5;
