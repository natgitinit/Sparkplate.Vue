<template>
  <input type="file" @change="onFileChange">
  <button @click="onUpload">Upload!</button>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    name: 'Upload',
    onFileChanged (event) {
      const file = event.target.files[0]
    },
    onUpload() {
      // upload file, get it from this.selectedFile
      const formData = new FormData()
      formData.append('myFile', this.selectedFile, this.selectedFile.name)
      axios.post('my-domain.com/file-upload', formData)
    }
  }
}

</script>