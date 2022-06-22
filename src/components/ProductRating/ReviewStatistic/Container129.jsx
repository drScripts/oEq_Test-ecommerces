import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container130 from "./Container130";
import Container131 from "./Container131";
import Rating20 from "./Rating20";

const Container129 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between gap-2">
      <Container130 />
      <Container131 />
      <Rating20 />
    </div>
  );
};

export default Container129;
