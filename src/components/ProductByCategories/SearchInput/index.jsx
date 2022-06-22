import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container1 from "./Container1";

const SearchInput = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4">
      <Container1 />
    </div>
  );
};

export default SearchInput;
