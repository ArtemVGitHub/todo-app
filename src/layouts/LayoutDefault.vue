<template>
  <div class="layout--default">
    <AppHeader />
    <MainView />
    <AppFooter />
    <div id="modal"></div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import MainView from '@/views/MainView.vue'
</script>
