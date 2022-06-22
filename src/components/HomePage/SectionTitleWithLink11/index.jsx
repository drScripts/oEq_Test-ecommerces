import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Text1 from "./Text1";
import Link1 from "./Link1";

const SectionTitleWithLink11 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4 flex justify-between items-center">
      <Text1 />
      <Link1 />
    </div>
  );
};

export default SectionTitleWithLink11;
