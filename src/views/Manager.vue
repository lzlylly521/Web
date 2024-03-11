<script setup>
import { RouterView } from 'vue-router'
import WebNav from '@/components/WebNav.vue'
import WebLeftNav from '@/components/WebLeftNav.vue'
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header><WebNav /></el-header>
      <el-container>
        <el-aside><WebLeftNav /></el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <div><WebNav /></div>
  <div>
    <div :span="8"><WebLeftNav /></div>
    <div :span="16"><RouterView /></div>
  </div> -->
</template>
<!-- this is Manager page -->
