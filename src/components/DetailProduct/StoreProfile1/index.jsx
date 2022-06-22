import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image60 from "./Image60";
import Container102 from "./Container102";
import Container104 from "./Container104";

const StoreProfile1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex items-center gap-3">
      <Image60 />
      <Container102 />
      <Container104 />
    </div>
  );
};

export default StoreProfile1;
