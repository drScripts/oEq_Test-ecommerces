import { useDispatch, useSelector } from "react-redux";
import { promo_productsActions } from "../features/promo_products";
import { newsActions } from "../features/news";

const useCustomRedux = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  let setGlobalState = {};

  Object.keys(globalState).forEach((key) => {
    setGlobalState[key] = (callback) => {
      const value = callback(globalState[key]);
      if (!value) return;

      switch (key) {
        case "promo_products":
          dispatch(promo_productsActions.setPromo_productsState(value));
          break;
        case "news":
          dispatch(newsActions.setNewsState(value));
          break;

        default:
          break;
      }
    };
  });

  return { globalState, setGlobalState };
};

export default useCustomRedux;
