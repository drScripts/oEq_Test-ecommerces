import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image37 from "./Image37";
import Text40 from "./Text40";

const Container68 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex items-center gap-2">
      <Image37 />
      <Text40 />
    </div>
  );
};

export default Container68;
