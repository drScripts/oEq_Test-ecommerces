import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container41 from "./Container41";
import Image19 from "./Image19";

const Container40 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex gap-5">
      <Container41 />
      <Image19 />
    </div>
  );
};

export default Container40;
