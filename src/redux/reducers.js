import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./slices/user";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootPersistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [""],
};

const rootReducer = combineReducers({
  user,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
