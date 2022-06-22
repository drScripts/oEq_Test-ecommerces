import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container126 from "./Container126";
import Container127 from "./Container127";
import Text86 from "./Text86";

const Container125 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex gap-2 justify-between items-center">
      <Container126 />
      <Container127 />
      <Text86 />
    </div>
  );
};

export default Container125;
