<template>
  <modal name="create-modal">
    <h1 class="view-name">Create</h1>
    <div>HELLO WORLD</div>
    <CreateQR />
  </modal>
</template>

<script>
import CreateQR from '@/components/create/CreateQR.vue'
// import VueQrcode from 'vue-qrcode'

export default {
  name: 'CreateView',
  components: { CreateQR }
}
</script>
