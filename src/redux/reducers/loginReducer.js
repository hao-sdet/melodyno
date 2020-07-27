import { LOGIN } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    userId: '',
    token: '',
    refreshToken: '',
    expiresOn: '',
    data: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true
            }
        default:
            return state;
    }
};

export default loginReducer;


