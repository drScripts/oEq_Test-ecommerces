import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image3 from "./Image3";
import Text3 from "./Text3";

const Container3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image3 />
      <Text3 />
    </div>
  );
};

export default Container3;
