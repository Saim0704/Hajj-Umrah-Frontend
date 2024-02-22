// import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({ reducer: persistedReducer });
  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);
