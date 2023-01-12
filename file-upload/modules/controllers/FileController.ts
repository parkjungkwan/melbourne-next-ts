import { UploadFileResponse }  from '../types'
import FileService  from '../services/FileService'

class FileController {
    
    private file: File

    constructor(file: File) {
        this.file = file
    }

    async uploadFile(): Promise<UploadFileResponse> {
        const fileService = new FileService()
        const uploadResponse = await fetch('http://localhost:8080/upload', {
            method: 'POST',
            body: fileService.getFormData(this.file)
        })

        const responseJson = await uploadResponse.json()

        if (responseJson.success === false) {
            return {
                success: false,
                message: responseJson.message
            }
        }

        return {
            success: true,
            message: 'Uploaded Successfully'
        }
    }

}

export default FileController