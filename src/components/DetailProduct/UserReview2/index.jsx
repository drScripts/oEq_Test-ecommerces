import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image25 from "./Image25";
import Container57 from "./Container57";

const UserReview2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex gap-4">
      <Image25 />
      <Container57 />
    </div>
  );
};

export default UserReview2;
