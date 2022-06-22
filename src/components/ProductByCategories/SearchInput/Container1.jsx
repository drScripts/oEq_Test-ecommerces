import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text1 from "./Text1";
import Image1 from "./Image1";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full rounded-full flex items-center gap-4 px-4 py-5 bg-gray-100">
      <Text1 />
      <Image1 />
    </div>
  );
};

export default Container1;
