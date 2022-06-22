import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/loopableProductCard4.js";

import Container6 from "./Container6";

const LoopableProductCard4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="w-full p-4 inline-flex gap-4 overflow-x-scroll"
      onClick={onClickHandler}
    >
      {globalState.promo_products.data.map((data, index) => (
        <>
          <Container6 key={index} data={data} />
        </>
      ))}
    </div>
  );
};

export default LoopableProductCard4;
