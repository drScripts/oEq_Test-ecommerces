import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image86 from "./Image86";
import Image87 from "./Image87";
import Image88 from "./Image88";
import Image89 from "./Image89";
import Image90 from "./Image90";

const Container126 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex">
      <Image86 />
      <Image87 />
      <Image88 />
      <Image89 />
      <Image90 />
    </div>
  );
};

export default Container126;
