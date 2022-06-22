import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container90 from "./Container90";
import Container92 from "./Container92";

const Container89 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" flex flex-col w-60 rounded-xl shadow-lg bg-white">
      <Container90 />
      <Container92 />
    </div>
  );
};

export default Container89;
