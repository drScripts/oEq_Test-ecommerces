import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text90 from "./Text90";
import Text91 from "./Text91";
import Container139 from "./Container139";

const Container137 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex-1">
      <Text90 />
      <Text91 />
      <Container139 />
    </div>
  );
};

export default Container137;
