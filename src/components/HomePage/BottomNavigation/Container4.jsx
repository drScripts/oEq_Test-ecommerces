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
import Text4 from "./Text4";

const Container4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image4 />
      <Text4 />
    </div>
  );
};

export default Container4;
