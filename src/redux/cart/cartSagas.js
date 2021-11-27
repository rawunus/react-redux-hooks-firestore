import { all, call, takeLatest, put } from "redux-saga/effects";

import userActionTypes from "../user/user.action.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOutSuccess() {
    yield put(clearCart());
}

export function* onSignSuccess() {
    yield takeLatest(
        userActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOutSuccess
    );
}

export function* cartSagas() {
    yield all([call(clearCartOnSignOutSuccess)]);
}
