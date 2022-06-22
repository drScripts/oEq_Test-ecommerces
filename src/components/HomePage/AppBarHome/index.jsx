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
import Text1 from "./Text1";
import Container2 from "./Container2";

const AppBarHome = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full flex items-center justify-between p-4">
      <Container1 />
      <Text1 />
      <Container2 />
    </div>
  );
};

export default AppBarHome;
