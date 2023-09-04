<template>
  <div class="view">
    <h1 class="view-name">Contacts</h1>
    <h1>HELLO CONTACTS</h1>
  </div>
</template>

<script>
// Components
// import Contacts from '@/components/contacts/ContactModal.vue'

export default {
  name: 'SettingsView',
  components: {
    //    ContactsQR
  },
  data: () => ({}),
  async mounted() {
    this.activeTab = this.$route.params.activeTab
  }
}
</script>

<style lang="scss" scoped></style>
