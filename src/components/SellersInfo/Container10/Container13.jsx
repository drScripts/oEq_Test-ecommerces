import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text10 from "./Text10";
import Text11 from "./Text11";

const Container13 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white">
      <Text10 />
      <Text11 />
    </div>
  );
};

export default Container13;
