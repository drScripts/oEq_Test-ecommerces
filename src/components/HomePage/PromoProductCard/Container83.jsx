import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image50 from "./Image50";
import Container84 from "./Container84";

const Container83 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white relative">
      <Image50 />
      <Container84 />
    </div>
  );
};

export default Container83;
