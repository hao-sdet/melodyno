import axios from 'axios';
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
} from './types';

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest())
        axios
            .get('https://api.melodyno.com/posts')
            .then(response => {
                // response.data is the users
                const posts = response.data
                dispatch(fetchPostsSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchPostsFailure(error.message))
            })
    }
}

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}
  
export const fetchPostsSuccess = medias => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}
  
export const fetchPostsFailure = error => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const likePost = (postId) => {
    return (dispatch) => {
        dispatch(likePostRequest())
        axios
            .post('https://api.melodyno.com/posts/'+postId)
            .then(response => {
                // response.data is the users
                const result = response.data
                dispatch(likePostSucess(result))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(likePostFailure(error.message))
            })
    }
}

export const likePostRequest = () => {
    return {
        type: LIKE_POST_REQUEST
    }
}
  
export const likePostSucess = result => {
    return {
        type: LIKE_POST_SUCCESS,
        payload: result
    }
}
  
export const likePostFailure = error => {
    return {
        type: LIKE_POST_FAILURE,
        payload: error
    }
}


