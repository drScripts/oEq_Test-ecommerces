import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image6 from "./Image6";
import Text4 from "./Text4";
import Container4 from "./Container4";

const RatingAppBar = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex items-center justify-center justify-between">
      <Image6 />
      <Text4 />
      <Container4 />
    </div>
  );
};

export default RatingAppBar;
