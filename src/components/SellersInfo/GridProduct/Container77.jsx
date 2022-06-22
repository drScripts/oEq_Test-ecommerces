import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/SellersInfo/GridProduct/container77.js";

import Image47 from "./Image47";
import Container78 from "./Container78";

const Container77 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {
    onClick({
      app: { navigate, setGlobalState, setSearchParams },
      context: { globalState, searchParams, params, location },
    });
  };

  return (
    <div className="rounded-xl bg-white" onClick={onClickHandler}>
      <Image47 />
      <Container78 />
    </div>
  );
};

export default Container77;
