import axios from 'axios';
import { 
    FETCH_MEDIAS_REQUEST,
    FETCH_MEDIAS_SUCCESS,
    FETCH_MEDIAS_FAILURE
} from './types';

export const fetchMedias = () => {
    return (dispatch) => {
        dispatch(fetchMediasRequest())
        axios
            .get('https://api.melodyno.com/medias')
            .then(response => {
                // response.data is the users
                const medias = response.data
                dispatch(fetchMediasSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchMediasFailure(error.message))
            })
    }
}

export const fetchMediasRequest = () => {
    return {
        type: FETCH_MEDIAS_REQUEST
    }
}

export const fetchMediasSuccess = medias => {
    return {
        type: FETCH_MEDIAS_SUCCESS,
        payload: medias
    }
}

export const fetchMediasFailure = error => {
    return {
        type: FETCH_MEDIAS_FAILURE,
        payload: error
    }
}