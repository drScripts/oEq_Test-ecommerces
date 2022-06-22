import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container94 from "./Container94";
import Text67 from "./Text67";
import Image55 from "./Image55";

const Container93 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2 flex items-center justify-between">
      <Container94 />
      <Text67 />
      <Image55 />
    </div>
  );
};

export default Container93;
