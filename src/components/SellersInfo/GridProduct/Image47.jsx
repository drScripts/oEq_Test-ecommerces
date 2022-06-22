import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image47 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="h-40 rounded-t-xl object-cover w-full"
      src="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
    />
  );
};

export default Image47;
