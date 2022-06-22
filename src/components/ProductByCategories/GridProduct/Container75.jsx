import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container76 from "./Container76";
import Text51 from "./Text51";
import Image46 from "./Image46";

const Container75 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="bg-white flex justify-between items-center mt-2">
      <Container76 />
      <Text51 />
      <Image46 />
    </div>
  );
};

export default Container75;
