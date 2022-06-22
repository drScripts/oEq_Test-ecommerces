import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useNavigate,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";

import { useCustomRedux } from "../../../hooks";

const Image2 = () => {
  const { globalState, setGlobalState } = useCustomRedux();

  return (
    <img
      className="w-10 h-10"
      src="https://api.kontenbase.com/upload/file/62a691723365653fbb8d4877/MNgQajRw/ic_menu_wishlist.png"
    />
  );
};

export default Image2;
