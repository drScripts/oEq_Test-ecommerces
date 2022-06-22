import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Text2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <p className="font-sans bg-white mt-4 text-2xl font-bold">
      Philosophy That Addresses Topics Such As Goodness
    </p>
  );
};

export default Text2;
