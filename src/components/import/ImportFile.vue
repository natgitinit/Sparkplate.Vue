<template>
  <form @submit.prevent="upload" enctype="multipart/form-data">
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <label for="file" class="btn btn-default">
      <input type="file" ref="file" @change="selectFile" />
    </label>

    <button class="btn btn-success" @click="upload">Upload</button>

    <div class="alert alert-light" role="alert">{{ message }}</div>

    <div class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
        >
          <a :href="file.url">{{ file.name }}</a>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import ImportFileService from '../../service/ImportFileService'

export default {
  name: 'import-files',
  data() {
    return {
      file: '',
      message: '',
      currentFile: '',
      progress: 0,

      fileInfos: []
    }
  },
  mounted() {
    ImportFileService.getFiles().then((response) => {
      this.fileInfos = response.data
    })
  },
  methods: {
    selectFile() {
      const file = this.$refs.file.files[0]
      this.file = file
      console.log('file', file)
    },
    upload() {
      const formData = new FormData()
      formData.append('file', this.file)
      console.log('formData file: ', this.file)

      this.progress = 0

      this.currentFile = this.file

      ImportFileService.upload(this.currentFile, (event) => {
        this.progress = Math.round((100 * event.loaded) / event.total)
      })
        .then((response) => {
          this.message = response.data.message
          return ImportFileService.getFiles()
        })
        .then((files) => {
          this.fileInfos = files.data
        })
        .catch(() => {
          this.progress = 0
          this.message = 'Could not upload the file!'
          this.currentFile = ''
        })

      this.file = ''
    }
  }
}
</script>
