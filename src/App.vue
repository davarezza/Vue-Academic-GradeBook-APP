<script setup>
</script>

<template>
  <top-navbar></top-navbar>
  <router-view></router-view>
  <bottom-footer></bottom-footer>
</template>

<script setup>
  import TopNavbar from './components/TopNavbar.vue'
  import BottomFooter from './components/BottomFooter.vue'
</script>