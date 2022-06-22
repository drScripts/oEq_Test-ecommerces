import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text38 from "./Text38";
import Text39 from "./Text39";
import Container67 from "./Container67";

const Container66 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2 p-4">
      <Text38 />
      <Text39 />
      <Container67 />
    </div>
  );
};

export default Container66;
