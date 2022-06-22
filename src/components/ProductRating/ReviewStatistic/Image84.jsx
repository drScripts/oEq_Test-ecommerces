import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image84 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-5 h-5"
      src=" https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/dWUoeaWo/star.png"
    />
  );
};

export default Image84;