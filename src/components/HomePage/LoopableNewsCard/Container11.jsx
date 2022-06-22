import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import {} from "../../../functions/HomePage/LoopableNewsCard/container11.js";

import Text7 from "./Text7";
import Text8 from "./Text8";
import Text9 from "./Text9";

const Container11 = ({ data }) => {
  const { globalState, setGlobalState } = useCustomRedux();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {};

  return (
    <div className="flex-1" onClick={onClickHandler}>
      <Text7 data={data} />
      <Text8 data={data} />
      <Text9 data={data} />
    </div>
  );
};

export default Container11;
