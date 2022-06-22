import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image12 from "./Image12";
import Text17 from "./Text17";

const Container31 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex gap-2 items-center">
      <Image12 />
      <Text17 />
    </div>
  );
};

export default Container31;
