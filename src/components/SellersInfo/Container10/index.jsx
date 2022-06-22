import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container11 from "./Container11";
import Container12 from "./Container12";
import Container13 from "./Container13";

const Container10 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white w-full p-4 flex items-center justify-between">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
};

export default Container10;
