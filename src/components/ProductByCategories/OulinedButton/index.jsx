import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Button1 from "./Button1";

const OulinedButton = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="w-full p-4">
      <Button1 />
    </div>
  );
};

export default OulinedButton;
