<template>
  <button>Upload </button>
  <upload></upload>
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
