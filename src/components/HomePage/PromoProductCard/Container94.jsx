import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image54 from "./Image54";
import Text66 from "./Text66";

const Container94 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex gap-2 items-center">
      <Image54 />
      <Text66 />
    </div>
  );
};

export default Container94;
