import { 
    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,
    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../actions/types';

const initialState = {
    posts: [],
    loading: false,
    error: ''
}
  
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state
      }
}

export default postReducer;