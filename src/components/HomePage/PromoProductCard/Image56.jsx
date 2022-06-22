import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image56 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className=" w-full rounded-t-xl h-40 object-cover"
      src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
    />
  );
};

export default Image56;
