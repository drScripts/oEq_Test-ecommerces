import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image51 from "./Image51";
import Text60 from "./Text60";

const Container87 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-2">
      <Image51 />
      <Text60 />
    </div>
  );
};

export default Container87;
