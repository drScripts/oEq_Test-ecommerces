import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/HomePage/CategorySlider/container52.js";

import Container53 from "./Container53";
import Text32 from "./Text32";

const Container52 = () => {
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
    <div
      className="flex flex-col items-center justify-center p-2"
      onClick={onClickHandler}
    >
      <Container53 />
      <Text32 />
    </div>
  );
};

export default Container52;
