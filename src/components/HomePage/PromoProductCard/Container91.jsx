import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text62 from "./Text62";

const Container91 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" px-5 py-2 bg-red-500 rounded-full absolute text-white bottom-0">
      <Text62 />
    </div>
  );
};

export default Container91;
