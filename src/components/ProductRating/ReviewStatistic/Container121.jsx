import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container122 from "./Container122";
import Container123 from "./Container123";
import Text85 from "./Text85";

const Container121 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between gap-2">
      <Container122 />
      <Container123 />
      <Text85 />
    </div>
  );
};

export default Container121;
