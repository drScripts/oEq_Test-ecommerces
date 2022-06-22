import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image9 from "./Image9";
import Rating442 from "./Rating442";

const Container26 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex gap-2 items-center">
      <Image9 />
      <Rating442 />
    </div>
  );
};

export default Container26;
