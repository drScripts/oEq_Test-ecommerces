import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text9 from "./Text9";
import Text10 from "./Text10";

const Container15 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white w-full p-4">
      <Text9 />
      <Text10 />
    </div>
  );
};

export default Container15;
