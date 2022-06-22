import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container36 from "./Container36";
import Text22 from "./Text22";
import Image16 from "./Image16";

const Container35 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex justify-between items-center mt-4">
      <Container36 />
      <Text22 />
      <Image16 />
    </div>
  );
};

export default Container35;
