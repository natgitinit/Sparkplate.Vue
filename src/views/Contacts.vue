<template>
  <div id="contacts-modal">
    <button 
      type="button"
      class="view"
      @click="showModal"> Open Modal! </button>

    <h1 class="view-name">Contacts</h1>
    <h1>HELLO CONTACTS</h1>
  </div>
</template>

<script>
// Components
import ContactsModal from '@/components/contacts/ContactsModal.vue';

export default {
    name: 'ContactsView',
    components: {
      ContactsModal 
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
</script>

<style lang="scss" scoped></style>
