import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container5 from "./Container5";
import Text6 from "./Text6";
import Container6 from "./Container6";

const AppBarDoubleLinks2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex justify-between items-center">
      <Container5 />
      <Text6 />
      <Container6 />
    </div>
  );
};

export default AppBarDoubleLinks2;
