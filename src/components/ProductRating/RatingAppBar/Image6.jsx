import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/ProductRating/RatingAppBar/image6.js";

const Image6 = () => {
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
      className="w-7 h-7"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/POxrVNxt/angle-small-left.png"
      onClick={onClickHandler}
    />
  );
};

export default Image6;
