import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image14 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-full h-36 rounded-t-xl object-cover"
      src="https://productionservices.jumia.co.ke/wp-content/uploads/2018/01/product1.jpeg"
    />
  );
};

export default Image14;
