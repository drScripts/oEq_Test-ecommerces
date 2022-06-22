import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container132 from "./Container132";

const Container131 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-32 bg-white h-2 rounded-full bg-gray-200">
      <Container132 />
    </div>
  );
};

export default Container131;
