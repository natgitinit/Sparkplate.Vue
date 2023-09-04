<template>
    <div class="view">
    <h1 class="view-name">Contacts</h1>
    <network-status />
    <h1>HELLO CONTACTS</h1>
    <!-- settings tabs -->
    <TabsWrapper class="flex items-center text-xl font-semibold">
        <TabComponent
        v-for="(tab, tabIndex) in tabs"
        :key="`settings-view_tab-${tabIndex}`"
        :on-click="() => (activeTab = tab)"
        :active="tab === activeTab"
        >{{ tab }}</TabComponent
        >
    </TabsWrapper>
    <!-- settings tabs -->

        <div class="bg-white shadow py-5 px-4 mt-4">
            <!-- user content -->
            <user-profile v-if="activeTab === 'user'" />
            <!-- user content -->

            <!-- security content -->
            <security-settings v-if="activeTab === 'security'" />
            <!-- security content -->
        </div>
    </div>
</template>

<script>
// Components
import UserProfile from '@/components/settings/UserProfile.vue'
import SecuritySettings from '@/components/settings/SecuritySettings.vue'
import NetworkStatus from '@/components/settings/NetworkStatus.vue'
// import Contacts from '@/components/contacts/ContactModal.vue'

export default {
    name: 'SettingsView',
    components: {
        UserProfile,
        SecuritySettings,
        NetworkStatus
    },
    data: () => ({
        activeTab: 'user',
        tabs: ['user', 'security', 'contacts']
    }),
    async mounted() {
        this.activeTab = this.$route.params.activeTab
    }
}
</script>

<style lang="scss" scoped></style>
