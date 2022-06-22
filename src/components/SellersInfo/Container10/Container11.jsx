import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text6 from "./Text6";
import Text7 from "./Text7";

const Container11 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div>
      <Text6 />
      <Text7 />
    </div>
  );
};

export default Container11;
