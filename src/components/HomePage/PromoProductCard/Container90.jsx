import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image53 from "./Image53";
import Container91 from "./Container91";

const Container90 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white relative">
      <Image53 />
      <Container91 />
    </div>
  );
};

export default Container90;
