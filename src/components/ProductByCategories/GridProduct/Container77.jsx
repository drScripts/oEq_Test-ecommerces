import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image47 from "./Image47";
import Container78 from "./Container78";

const Container77 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="rounded-xl bg-white">
      <Image47 />
      <Container78 />
    </div>
  );
};

export default Container77;
