import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container97 from "./Container97";
import Container99 from "./Container99";

const Container96 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col w-60 bg-white rounded-xl shadow-lg">
      <Container97 />
      <Container99 />
    </div>
  );
};

export default Container96;
