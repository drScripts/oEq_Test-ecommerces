import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image62 from "./Image62";

const Container104 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div>
      <Image62 />
    </div>
  );
};

export default Container104;
