import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image19 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-20 h-20 rounded-xl object-cover"
      src="https://awsimages.detik.net.id/community/media/visual/2019/11/20/00b91aa6-26e3-4c8b-ad2d-054c3c1a268b_169.jpeg?w=700&q=90"
    />
  );
};

export default Image19;
