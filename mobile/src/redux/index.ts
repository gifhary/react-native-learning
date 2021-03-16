import {applyMiddleware, combineReducers, createStore, Reducer, Store, StoreEnhancer} from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import {persistReducer, persistStore} from "redux-persist";
import defaultStore, {IStore} from "./defaultStore";
import MetaReducer from "./meta/MetaReducer";
import storage from "@react-native-community/async-storage";
import { reducer as formReducer } from "redux-form"

const metaPersistConfig = {
	key: "meta",
	storage,
	whitelist: ["token"],
};

const reducers: Reducer<any, any> = combineReducers({
	metaStore: persistReducer(metaPersistConfig, MetaReducer),
	form: formReducer,
});

let middleware: StoreEnhancer;
if (__DEV__) {
	middleware = applyMiddleware(
		logger,
		promiseMiddleware,
	);
} else {
	middleware = applyMiddleware(
		promiseMiddleware,
	);
}

export const store: Store<IStore> = createStore(reducers, defaultStore, middleware);
export const persistor = persistStore(store);
