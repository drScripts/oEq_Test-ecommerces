import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image45 from "./Image45";
import Text50 from "./Text50";

const Container76 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-2">
      <Image45 />
      <Text50 />
    </div>
  );
};

export default Container76;
