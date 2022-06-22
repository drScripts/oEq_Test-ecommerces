import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image63 from "./Image63";
import Container105 from "./Container105";
import Container107 from "./Container107";

const StoreProfile2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center gap-4 p-4">
      <Image63 />
      <Container105 />
      <Container107 />
    </div>
  );
};

export default StoreProfile2;
