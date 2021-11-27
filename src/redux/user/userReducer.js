import userActionTypes from "./user.action.types";
const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null,
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: null,
            };
        case userActionTypes.SIGNIN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
