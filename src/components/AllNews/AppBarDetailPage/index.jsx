import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image3 from "./Image3";
import Text2 from "./Text2";
import Container3 from "./Container3";

const AppBarDetailPage = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex justify-between items-center p-4">
      <Image3 />
      <Text2 />
      <Container3 />
    </div>
  );
};

export default AppBarDetailPage;
