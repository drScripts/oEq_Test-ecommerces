import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image11 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-full h-36 rounded-t-xl object-cover"
      src="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40282.jpg?w=2000"
    />
  );
};

export default Image11;
