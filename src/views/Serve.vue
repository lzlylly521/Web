<template>
  <div><WebNav /></div>
  <div>服务页面</div>
  <div><RouterView /></div>
  <div><DownNavVue /></div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import DownNavVue from '@/components/DownNav.vue'
import WebNav from '@/components/WebNav.vue'
</script>
