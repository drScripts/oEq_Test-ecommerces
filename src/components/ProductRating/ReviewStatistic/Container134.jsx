import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image96 from "./Image96";
import Image97 from "./Image97";
import Image98 from "./Image98";
import Image99 from "./Image99";
import Image100 from "./Image100";

const Container134 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex">
      <Image96 />
      <Image97 />
      <Image98 />
      <Image99 />
      <Image100 />
    </div>
  );
};

export default Container134;
