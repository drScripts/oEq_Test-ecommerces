import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container62 from "./Container62";
import Text36 from "./Text36";

const Container61 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-2">
      <Container62 />
      <Text36 />
    </div>
  );
};

export default Container61;
