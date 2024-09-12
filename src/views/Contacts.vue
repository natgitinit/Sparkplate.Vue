<template>
  <div id="contacts-modal">
    <h1 class="contacts-header">Contacts</h1>
    <button type="button" class="btn btn-center" @click="showModal">
      IMPORT
    </button>

    <ContactsModal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <div class="modal-header">QR Code</div></template
      >
      <template v-slot:body>
        <div class="qr-style">
          <VueVCard
            orgPost="00000"
            orgStreet="5555 Street Name"
            orgRegion="Some Region"
            orgCity="Some City"
            orgCountry="LRK"
            orgName="OrganizationName"
            firstName="John"
            lastName="Doe"
            workPhone="5555555555"
            homePhone="5555555555"
          />
        </div>
      </template>

      <template v-slot:footer>Footer </template>
    </ContactsModal>

    <Transition>
      <Modal :handle-close="closeModal" :is-opened="isModalVisible" />
    </Transition>
  </div>
</template>

<script>
// Components
import ContactsModal from '@/components/contacts/ContactsModal.vue'
import VueVCard from '@/components/contacts/VueVCard.vue'

export default {
  name: 'ContactsView',
  components: {
    ContactsModal,
    VueVCard
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
