import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image1 from "./Image1";
import Image2 from "./Image2";

const Container2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-3">
      <Image1 />
      <Image2 />
    </div>
  );
};

export default Container2;
