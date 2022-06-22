import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text56 from "./Text56";

const Container84 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white px-5 py-2 bg-red-500 rounded-full absolute text-white bottom-0">
      <Text56 />
    </div>
  );
};

export default Container84;
