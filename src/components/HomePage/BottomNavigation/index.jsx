import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

const BottomNavigation = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex justify-around py-4 bottom-0 sticky bg-white">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
};

export default BottomNavigation;
