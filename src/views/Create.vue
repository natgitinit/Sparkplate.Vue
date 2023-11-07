<template>
  <div name="create-view">
    <h1 class="view-name">Create QR</h1>
    <CreateQR />
  </div>
</template>

<script>
import CreateQR from '@/components/create/CreateQR.vue'

export default {
  name: 'CreateView',
  components: { CreateQR }
}
</script>

<style lang="scss" scoped>
.view-name {
  font-size: 35px;
  text-align: center;
}

.create-view {
  display: flex;
  align-items: center;
}
</style>
