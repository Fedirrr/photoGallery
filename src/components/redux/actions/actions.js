const SUCCESSFUL_REQUEST = "SUCCESSFUL_REQUEST";
const ERROR_REQUEST = "ERROR_REQUEST";
const PHOTO_ID = "PHOTO_ID"

export const successful = (photos) => ({type:SUCCESSFUL_REQUEST, payload:photos});
export const error = (photos) => ({type:ERROR_REQUEST, payload:photos});
export const photoId = (photo) => ({type:PHOTO_ID, payload:photo});