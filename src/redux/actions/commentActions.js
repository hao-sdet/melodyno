import axios from 'axios';
import { 
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAILURE
} from './types';

export const fetchComments = (postId) => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest())
        axios
            .get('https://api.melodyno.com/comments')
            .then(response => {
                // response.data is the users
                const comments = response.data
                dispatch(fetchCommentsSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchCommentsFailure(error.message))
            })
    }
}

export const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentsSuccess = medias => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFailure = error => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: error
    }
}