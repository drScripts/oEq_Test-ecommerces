import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/SellersInfo/GridProduct/image42.js";

const Image42 = () => {
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
      src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80"
      onClick={onClickHandler}
    />
  );
};

export default Image42;
