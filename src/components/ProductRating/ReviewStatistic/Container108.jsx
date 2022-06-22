import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text80 from "./Text80";
import Text81 from "./Text81";

const Container108 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 flex flex-col justify-center border-r-2">
      <Text80 />
      <Text81 />
    </div>
  );
};

export default Container108;
