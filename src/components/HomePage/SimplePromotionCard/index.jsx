import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Container37 from "./Container37";

const SimplePromotionCard = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="p-4 w-full">
      <Container37 />
    </div>
  );
};

export default SimplePromotionCard;
