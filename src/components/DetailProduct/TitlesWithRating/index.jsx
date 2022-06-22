import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text3 from "./Text3";
import Container1 from "./Container1";

const TitlesWithRating = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex items-center justify-between">
      <Text3 />
      <Container1 />
    </div>
  );
};

export default TitlesWithRating;
