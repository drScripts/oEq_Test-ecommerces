import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/ProductByCategories/GridProduct/image47.js";

const Image47 = () => {
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
    <img
      className="h-40 rounded-t-xl object-cover w-full"
      src="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
      onClick={onClickHandler}
    />
  );
};

export default Image47;
