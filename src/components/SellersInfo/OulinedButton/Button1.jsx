import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Button1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <button className="w-full border-black h-14 rounded-xl border-2">
      Load More
    </button>
  );
};

export default Button1;
