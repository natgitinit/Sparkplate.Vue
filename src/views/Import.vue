<template>
  <div name="import-view">
    <h1>HELLO IMPORT</h1>
    <ImportFile />
  </div>
</template>

<script>
import ImportFile from '@/components/import/ImportFile.vue'

export default {
  name: 'ImportView',
  components: { ImportFile }
}
</script>
