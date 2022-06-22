import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container55 from "./Container55";

const Container54 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" inline-block">
      <Container55 />
    </div>
  );
};

export default Container54;
