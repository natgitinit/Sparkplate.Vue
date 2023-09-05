<template>
  <div id="contacts-modal">
    <button 
      type="button"
      class="btn"
      @click="showModal"> IMPORT </button>
  
      <ContactsModal
        v-show="isModalVisible"
        @close="closeModal" >
    
        <template v-slot:header>
          This is a new modal header. 
        </template>

        <template v-slot:body>

          This is a new modal body. 
        </template>

        <template v-slot:footer>
          This is a new modal footer. 
        </template>
      </ContactsModal>

    <Transition>
      <Modal :handle-close="closeModal" :is-opened="isModalVisible" />
    </Transition>

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
