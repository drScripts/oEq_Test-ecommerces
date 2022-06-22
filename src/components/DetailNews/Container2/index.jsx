import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image3 from "./Image3";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import Text5 from "./Text5";

const Container2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white w-full p-4">
      <Image3 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
};

export default Container2;
