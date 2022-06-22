import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image15 from "./Image15";
import Text21 from "./Text21";

const Container36 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex gap-2 items-center">
      <Image15 />
      <Text21 />
    </div>
  );
};

export default Container36;
