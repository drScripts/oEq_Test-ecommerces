import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text68 from "./Text68";

const Container98 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className=" px-5 py-2 bg-red-500 rounded-full absolute text-white bottom-0">
      <Text68 />
    </div>
  );
};

export default Container98;
