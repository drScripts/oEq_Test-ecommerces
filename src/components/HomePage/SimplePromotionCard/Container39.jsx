import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text24 from "./Text24";
import Image18 from "./Image18";

const Container39 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center mt-4 gap-4">
      <Text24 />
      <Image18 />
    </div>
  );
};

export default Container39;
