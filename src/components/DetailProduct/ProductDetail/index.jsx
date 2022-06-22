import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container137 from "./Container137";
import Container138 from "./Container138";

const ProductDetail = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex gap-2 p-4">
      <Container137 />
      <Container138 />
    </div>
  );
};

export default ProductDetail;
