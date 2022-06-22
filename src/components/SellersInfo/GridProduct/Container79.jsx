import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container80 from "./Container80";
import Text55 from "./Text55";
import Image49 from "./Image49";

const Container79 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="mt-2  flex items-center justify-between px-4">
      <Container80 />
      <Text55 />
      <Image49 />
    </div>
  );
};

export default Container79;
