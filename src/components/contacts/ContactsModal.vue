<template>
  <modal
    name="contactsModal"
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

const initialState = () => ({
  contacts: null
})

export default {
  name: 'ContactsModal',
  components: {},
  data: initialState,
  computed: {},
  methods: {
    onModalOpen() {
      // const { wallet } = payload.params
      // this.wallet = wallet
    },
    onModalClose() {
      Object.assign(this.$data, initialState())
    }
  }
}
</script>
