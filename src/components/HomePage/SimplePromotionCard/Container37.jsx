import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container38 from "./Container38";
import Image17 from "./Image17";

const Container37 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full  rounded-xl p-7 flex justify-between bg-blue-500">
      <Container38 />
      <Image17 />
    </div>
  );
};

export default Container37;
