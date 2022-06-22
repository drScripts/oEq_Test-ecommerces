import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image31 from "./Image31";
import Image32 from "./Image32";
import Image33 from "./Image33";
import Image34 from "./Image34";
import Image35 from "./Image35";

const Container63 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex mt-2">
      <Image31 />
      <Image32 />
      <Image33 />
      <Image34 />
      <Image35 />
    </div>
  );
};

export default Container63;
