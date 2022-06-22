import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

import Image91 from "./Image91";
import Image92 from "./Image92";
import Image93 from "./Image93";
import Image94 from "./Image94";
import Image95 from "./Image95";

const Container130 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <div className="flex">
      <Image91 />
      <Image92 />
      <Image93 />
      <Image94 />
      <Image95 />
    </div>
  );
};

export default Container130;
