import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image14 from "./Image14";
import Image15 from "./Image15";

const Container6 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-3">
      <Image14 />
      <Image15 />
    </div>
  );
};

export default Container6;
