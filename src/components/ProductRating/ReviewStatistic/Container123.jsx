import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container124 from "./Container124";

const Container123 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white bg-gray-200 h-2 rounded-full w-32">
      <Container124 />
    </div>
  );
};

export default Container123;
