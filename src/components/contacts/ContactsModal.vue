<template>
  <modal
    name="contactModal"
    height="auto"
    @before-open="onModalOpen"
    @closed="onModalClose"
  >
    <div>
      <input
        type="text"
        name=""
        required
        v-model="InputData"
        @input="handleInput('input-value', InputData)"
      />
      <label>Enter Content</label>
      <button type="button" name="button" @click="importContact">
        Import vCard
      </button>
    </div>
  </modal>
</template>

<script>
// import something from "./something.js"
// import vCardsJS from "vcards-js"

export default {
  name: 'Content-1',
  data() {
    return {
      InputData: ''
    }
  },
  methods: {
    handleInput(emitEvent, value) {
      this.$emit(emitEvent, value)
    },
    importContact() {}
  }
}
</script>
