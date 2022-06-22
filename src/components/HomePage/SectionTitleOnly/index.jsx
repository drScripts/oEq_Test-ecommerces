import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text2 from "./Text2";

const SectionTitleOnly = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4">
      <Text2 />
    </div>
  );
};

export default SectionTitleOnly;
