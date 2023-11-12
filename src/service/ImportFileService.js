import http from '../http-common'

class ImportFileService {
  upload(file, onUploadProgress) {
    let formData = new FormData()
    formData.append('file', file)
    console.log(file)

    return http.post('/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }

  getFiles() {
    return http.get('/files')
  }
}

export default new ImportFileService()
