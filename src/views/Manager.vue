<script setup>
import { RouterView } from 'vue-router'
import WebNav from '@/components/WebNav.vue'
import WebLeftNav from '@/components/WebLeftNav.vue'
</script>
<template>
  <div><WebNav /></div>
  <div>
    <div :span="8"><WebLeftNav /></div>
    <div :span="16"><RouterView /></div>
  </div>
</template>
<!-- this is Manager page -->
