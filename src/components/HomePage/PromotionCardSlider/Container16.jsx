import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text5 from "./Text5";
import Text6 from "./Text6";

const Container16 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="absolute top-0 left-0 h-full w-40 rounded-r-full bg-violet-500 flex flex-col gap-4 p-2 justify-center">
      <Text5 />
      <Text6 />
    </div>
  );
};

export default Container16;
