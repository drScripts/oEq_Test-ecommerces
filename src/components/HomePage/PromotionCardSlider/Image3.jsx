import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image3 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="flex-1 rounded-r-xl h-44"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/ZOeqtKUp/card.png"
    />
  );
};

export default Image3;
