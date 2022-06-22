import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image63 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="rounded-full w-14 h-14 object-cover"
      src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
    />
  );
};

export default Image63;
