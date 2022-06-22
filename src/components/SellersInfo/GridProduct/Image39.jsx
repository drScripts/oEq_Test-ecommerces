import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image39 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="h-40 rounded-t-xl object-cover w-full"
      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&w=1000&q=80"
    />
  );
};

export default Image39;
