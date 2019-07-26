/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 14:22:43
 * @Description:
 */
import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import rootReducer from "./reducers";

const configureStore = preloadedState => {
  return createStore (
    rootReducer,
    preloadedState,
    compose (
      applyMiddleware(createLogger)
    )
  );
}

const store = configureStore();

export default store;
