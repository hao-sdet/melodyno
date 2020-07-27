import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import loginReducer  from './reducers/loginReducer';
import mediaReducer from './reducers/mediaReducer';
import commentReducer from './reducers/commentReducer';
import postReducer from './reducers/postReducer';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    mediaReducer: mediaReducer,
    commentReducer: commentReducer,
    postReducer: postReducer
});

const middlewares = [thunk];

const configureStore = () => createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore;