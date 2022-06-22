import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text11 from "./Text11";
import Text12 from "./Text12";
import Container25 from "./Container25";

const Container24 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4">
      <Text11 />
      <Text12 />
      <Container25 />
    </div>
  );
};

export default Container24;
