import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image58 from "./Image58";
import Text73 from "./Text73";

const Container101 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-2 items-center">
      <Image58 />
      <Text73 />
    </div>
  );
};

export default Container101;
