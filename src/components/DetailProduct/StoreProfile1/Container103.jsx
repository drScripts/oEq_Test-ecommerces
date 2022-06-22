import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text76 from "./Text76";
import Image61 from "./Image61";

const Container103 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex items-center gap-2">
      <Text76 />
      <Image61 />
    </div>
  );
};

export default Container103;
