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
import Text4 from "./Text4";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-3">
      <Image1 />
      <Text4 />
    </div>
  );
};

export default Container1;
