import { 
    FETCH_MEDIAS_REQUEST,
    FETCH_MEDIAS_SUCCESS,
    FETCH_MEDIAS_FAILURE
} from '../actions/types';

const initialState = {
    loading: false,
    medias: [],
    error: ''
}
  
const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEDIAS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MEDIAS_SUCCESS:
            return {
                loading: false,
                medias: action.payload,
                error: ''
            }
        case FETCH_MEDIAS_FAILURE:
            return {
                loading: false,
                medias: [],
                error: action.payload
            }
        default:
            return state
      }
}

export default mediaReducer;