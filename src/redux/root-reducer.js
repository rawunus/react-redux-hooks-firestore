import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cart.reducer";
import directoyReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoyReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
