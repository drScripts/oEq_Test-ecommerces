import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image4 from "./Image4";
import Text3 from "./Text3";
import Image5 from "./Image5";

const AppBarDoubleLinks = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between p-4">
      <Image4 />
      <Text3 />
      <Image5 />
    </div>
  );
};

export default AppBarDoubleLinks;
