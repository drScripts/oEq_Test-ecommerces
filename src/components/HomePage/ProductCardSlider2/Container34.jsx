import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text19 from "./Text19";
import Text20 from "./Text20";
import Container35 from "./Container35";

const Container34 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4">
      <Text19 />
      <Text20 />
      <Container35 />
    </div>
  );
};

export default Container34;
