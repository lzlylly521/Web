<script setup>
import WebNav from '@/components/WebNav.vue'
</script>
<template>
  <div><WebNav /></div>
  <el-result title="404" sub-title="页面错误">
    <template #icon>
      <el-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <el-button type="primary">Back</el-button>
    </template>
  </el-result>
</template>

<style scoped></style>
<!-- this is 404 page -->
