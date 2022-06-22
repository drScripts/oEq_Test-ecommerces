import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text3 from "./Text3";
import Text4 from "./Text4";

const Container12 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="absolute top-0 left-0 h-full w-40 rounded-r-full bg-blue-600 flex flex-col justify-center gap-4 p-2">
      <Text3 />
      <Text4 />
    </div>
  );
};

export default Container12;
