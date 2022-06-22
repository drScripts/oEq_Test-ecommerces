import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text8 from "./Text8";
import Text9 from "./Text9";

const Container12 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white">
      <Text8 />
      <Text9 />
    </div>
  );
};

export default Container12;
