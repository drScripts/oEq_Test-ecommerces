import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image7 from "./Image7";
import Text5 from "./Text5";

const Container9 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex gap-4 items-center">
      <Image7 />
      <Text5 />
    </div>
  );
};

export default Container9;
