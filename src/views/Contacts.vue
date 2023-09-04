<template>
  <div class="view">
    <h1 class="view-name">Contacts</h1>
    <h1>HELLO CONTACTS</h1>
  </div>
</template>

<script>
// Components
// import ContactsModal from '@/components/contacts/ContactsModal.vue'
import VCards from 'vcards-js'
import QRcode from 'qrcode'

export default {
  name: 'ContactsView',
  mounted() {
    const vCard = VCards()
    vCard.firstName = 'John'
    vCard.middleName = 'Johnovich'
    vCard.lastName = 'Snow'
    vCard.note = 'user-id-1234'
    console.log(vCard.getFormattedString())
    QRcode.toDataURL(vCard.getFormattedString(), {}, (_err, url) => {
      this.$refs.img.setAttribute('src', url)
    })
  },
  components: {
    // ContactsModal
  },
  data: () => ({})
  //     async mounted() {
  //     this.activeTab = this.$route.params.activeTab
  // }
}
</script>

<style lang="scss" scoped></style>
