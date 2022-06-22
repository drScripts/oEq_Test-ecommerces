import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import { onClick } from "../../../functions/HomePage/loopableNewsCard.js";

import Container10 from "./Container10";

const LoopableNewsCard = () => {
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
    <div className="w-full p-4" onClick={onClickHandler}>
      {globalState.news.data.map((data, index) => (
        <>
          <Container10 key={index} data={data} />
        </>
      ))}
    </div>
  );
};

export default LoopableNewsCard;
