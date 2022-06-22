import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image17 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-36 h-36 object-cover"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/pysjCWEh/MX472_AV4-removebg-preview.png"
    />
  );
};

export default Image17;
