import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container68 from "./Container68";
import Text41 from "./Text41";
import Image38 from "./Image38";

const Container67 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex justify-between items-center">
      <Container68 />
      <Text41 />
      <Image38 />
    </div>
  );
};

export default Container67;
