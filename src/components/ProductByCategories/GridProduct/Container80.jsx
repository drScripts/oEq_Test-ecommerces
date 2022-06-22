import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image48 from "./Image48";
import Text54 from "./Text54";

const Container80 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex gap-2 items-center">
      <Image48 />
      <Text54 />
    </div>
  );
};

export default Container80;
