<template>
  <div id="contacts-modal">
    <button type="button" class="btn" @click="showModal">IMPORT</button>

    <ContactsModal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header> This is a new modal header. </template>

      <template v-slot:body>
        <VueVCard
          orgPost="00000"
          orgStreet="Some Street name"
          orgRegion="Some Region"
          orgCity="Some City"
          orgCountry="LRK"
          orgName="OrganizationName"
          firstName="John"
          lastName="Doe"
          workPhone="5555555555"
          homePhone="5555555555"
        />
        This is a new modal body.
      </template>

      <template v-slot:footer> This is a new modal footer. </template>
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
