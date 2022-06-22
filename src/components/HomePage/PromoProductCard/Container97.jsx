import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image56 from "./Image56";
import Container98 from "./Container98";

const Container97 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="relative">
      <Image56 />
      <Container98 />
    </div>
  );
};

export default Container97;
