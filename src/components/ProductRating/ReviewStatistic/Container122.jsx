import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image81 from "./Image81";
import Image82 from "./Image82";
import Image83 from "./Image83";
import Image84 from "./Image84";
import Image85 from "./Image85";

const Container122 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex">
      <Image81 />
      <Image82 />
      <Image83 />
      <Image84 />
      <Image85 />
    </div>
  );
};

export default Container122;
