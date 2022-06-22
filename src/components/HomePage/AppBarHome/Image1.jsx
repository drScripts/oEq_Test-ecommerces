import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image1 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-7 h-7"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/nuYJIzYP/bell.png"
    />
  );
};

export default Image1;
