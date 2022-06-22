import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container26 from "./Container26";
import Text14 from "./Text14";
import Image10 from "./Image10";

const Container25 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex justify-between items-center mt-4">
      <Container26 />
      <Text14 />
      <Image10 />
    </div>
  );
};

export default Container25;
