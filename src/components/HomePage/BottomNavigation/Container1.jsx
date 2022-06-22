import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image1 from "./Image1";
import Text1 from "./Text1";

const Container1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image1 />
      <Text1 />
    </div>
  );
};

export default Container1;
