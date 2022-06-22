import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/DetailProduct/LoopableProductCard/container7.js";

import Text3 from "./Text3";
import Text4 from "./Text4";
import Container8 from "./Container8";

const Container7 = ({ data }) => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white rounded-b-xl p-4 shadow-xl w-60"
      onClick={onClickHandler}
    >
      <Text3 data={data} />
      <Text4 data={data} />
      <Container8 data={data} />
    </div>
  );
};

export default Container7;
