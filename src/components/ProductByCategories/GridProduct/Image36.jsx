import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image36 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="h-40 rounded-t-xl object-cover w-full"
      src="https://img.freepik.com/free-psd/cosmetic-product-packaging-mockup_1150-40284.jpg?w=2000"
    />
  );
};

export default Image36;
