const SUCCESSFUL_REQUEST = "SUCCESSFUL_REQUEST";
const ERROR_REQUEST = "ERROR_REQUEST";
const PHOTO_ID = "PHOTO_ID"
const initialState = {
    photos: [],
    photosId: null
}

export const unsplashReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSFUL_REQUEST:
            return {
                ...state,
                photos: action.payload
            }
        case ERROR_REQUEST:
            return {
                ...state,
                error: action.payload
            }
        case PHOTO_ID: return {
             ...state,
            photosId: action.payload
        }
        default:
            return state
    }
}