import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/LoopableNewsCard/container10.js";

import Container11 from "./Container11";
import Image5 from "./Image5";

const Container10 = ({ data }) => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="w-full flex gap-4 flex-1" onClick={onClickHandler}>
      <Container11 data={data} />
      <Image5 data={data} />
    </div>
  );
};

export default Container10;
