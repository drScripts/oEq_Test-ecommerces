import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text26 from "./Text26";
import Text27 from "./Text27";

const Container43 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div>
      <Text26 />
      <Text27 />
    </div>
  );
};

export default Container43;
