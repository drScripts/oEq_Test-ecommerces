import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container134 from "./Container134";
import Container135 from "./Container135";
import Text88 from "./Text88";

const Container133 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between gap-2">
      <Container134 />
      <Container135 />
      <Text88 />
    </div>
  );
};

export default Container133;
