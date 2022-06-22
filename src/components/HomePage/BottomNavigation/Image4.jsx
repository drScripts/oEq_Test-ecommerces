import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image4 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-10 h-10 object-cover rounded-full"
      src="https://res.cloudinary.com/djzckgbbg/image/upload/v1655703107/profileBukuKeuangan/hicswkfftwnauapblwbw.jpg"
    />
  );
};

export default Image4;
