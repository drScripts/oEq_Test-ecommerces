import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text63 from "./Text63";
import Text64 from "./Text64";
import Text65 from "./Text65";
import Container93 from "./Container93";

const Container92 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2 p-4">
      <Text63 />
      <Text64 />
      <Text65 />
      <Container93 />
    </div>
  );
};

export default Container92;
