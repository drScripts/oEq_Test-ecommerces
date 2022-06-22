import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container22 from "./Container22";

const Container21 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div>
      <Container22 />
    </div>
  );
};

export default Container21;
