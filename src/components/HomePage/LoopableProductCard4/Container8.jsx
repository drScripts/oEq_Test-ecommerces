import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/LoopableProductCard4/container8.js";

import Container9 from "./Container9";
import Text6 from "./Text6";
import Image4 from "./Image4";

const Container8 = ({ data }) => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div
      className="bg-white w-full mt-3 flex justify-between items-center"
      onClick={onClickHandler}
    >
      <Container9 data={data} />
      <Text6 data={data} />
      <Image4 data={data} />
    </div>
  );
};

export default Container8;
