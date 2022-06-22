import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container108 from "./Container108";
import Container116 from "./Container116";

const ReviewStatistic = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex gap-2">
      <Container108 />
      <Container116 />
    </div>
  );
};

export default ReviewStatistic;
