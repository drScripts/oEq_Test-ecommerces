import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image40 from "./Image40";
import Text44 from "./Text44";

const Container71 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-2">
      <Image40 />
      <Text44 />
    </div>
  );
};

export default Container71;
