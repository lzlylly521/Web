<script setup>
import WebNav from '@/components/WebNav.vue'
import DownNavVue from '@/components/DownNav.vue'
</script>
<template>
  <div>
    <WebNav />
  </div>
  <div>
    <el-row>
      <el-col :span="24"
        >第一栏
        <div class="grid-content ep-bg-purple-dark"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"
        >第二栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="12"
        >第二栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"
        >第三栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="8"
        >第三栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
      <el-col :span="8"
        >第三栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"
        >第四栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="6"
        >第四栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
      <el-col :span="6"
        >第四栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="6"
        >第四栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple"
      /></el-col>
      <el-col :span="4"
        >第五栏
        <div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
  </div>
  <div><DownNavVue /></div>
</template>
<style scoped></style>
<!-- this is Index page -->
