import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container71 from "./Container71";
import Text45 from "./Text45";
import Image41 from "./Image41";

const Container70 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center justify-between">
      <Container71 />
      <Text45 />
      <Image41 />
    </div>
  );
};

export default Container70;
