export interface UploadFileResponse {
    success: boolean,
    message: string
}
export interface ValidatorResponse {
    isValid: boolean,
    errorMessage: string
}

export const fileTypes = [
    'jpg',
    'png',

]
