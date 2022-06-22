import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text1 from "./Text1";
import Text2 from "./Text2";

const Container8 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="inline-flex gap-4 w-40 absolute h-full bg-red-500 rounded-r-full flex flex-col justify-center p-2">
      <Text1 />
      <Text2 />
    </div>
  );
};

export default Container8;
