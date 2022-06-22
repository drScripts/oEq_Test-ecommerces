import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container118 from "./Container118";
import Container119 from "./Container119";
import Text84 from "./Text84";

const Container117 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between gap-2">
      <Container118 />
      <Container119 />
      <Text84 />
    </div>
  );
};

export default Container117;
