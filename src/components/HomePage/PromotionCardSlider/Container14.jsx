import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container15 from "./Container15";
import Image4 from "./Image4";
import Container16 from "./Container16";

const Container14 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-80 flex relative">
      <Container15 />
      <Image4 />
      <Container16 />
    </div>
  );
};

export default Container14;
