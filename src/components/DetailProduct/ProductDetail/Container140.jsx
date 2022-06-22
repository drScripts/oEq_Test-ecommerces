import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image101 from "./Image101";
import Text92 from "./Text92";

const Container140 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-2 items-center">
      <Image101 />
      <Text92 />
    </div>
  );
};

export default Container140;
