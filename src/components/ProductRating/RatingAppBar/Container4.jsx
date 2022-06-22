import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image7 from "./Image7";
import Text5 from "./Text5";

const Container4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-2">
      <Image7 />
      <Text5 />
    </div>
  );
};

export default Container4;
