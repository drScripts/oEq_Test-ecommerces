import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image76 from "./Image76";
import Image77 from "./Image77";
import Image78 from "./Image78";
import Image79 from "./Image79";
import Image80 from "./Image80";

const Container118 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex">
      <Image76 />
      <Image77 />
      <Image78 />
      <Image79 />
      <Image80 />
    </div>
  );
};

export default Container118;
