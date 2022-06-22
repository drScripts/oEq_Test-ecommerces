import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container87 from "./Container87";
import Text61 from "./Text61";
import Image52 from "./Image52";

const Container86 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center justify-between mt-2">
      <Container87 />
      <Text61 />
      <Image52 />
    </div>
  );
};

export default Container86;
