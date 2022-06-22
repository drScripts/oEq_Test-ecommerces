import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text15 from "./Text15";
import Text16 from "./Text16";
import Container30 from "./Container30";

const Container29 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="p-4">
      <Text15 />
      <Text16 />
      <Container30 />
    </div>
  );
};

export default Container29;
