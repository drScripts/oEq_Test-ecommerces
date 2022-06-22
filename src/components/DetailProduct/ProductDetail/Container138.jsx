import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text89 from "./Text89";

const Container138 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-end">
      <Text89 />
    </div>
  );
};

export default Container138;
