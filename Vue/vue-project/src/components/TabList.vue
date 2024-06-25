<script setup>
import TabItem from './TabItem.vue';
    const props = defineProps(['items', 'max'])
</script>
<template>
    <div class="tab_list">
        <TabItem v-for="player in props.items" :item="player" :max-hot="props.max"></TabItem>
    </div>
</template>
<style scoped>
.tab_list {
    margin: 20px;
}
</style>