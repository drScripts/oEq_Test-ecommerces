import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container7 from "./Container7";
import Image2 from "./Image2";
import Container8 from "./Container8";

const Container6 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex w-80 relative">
      <Container7 />
      <Image2 />
      <Container8 />
    </div>
  );
};

export default Container6;
