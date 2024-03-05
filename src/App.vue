<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <div></div>
  <!-- <div>hello</div> -->
  <!-- <div>
    <nav>
      <RouterLink to="/">Index</RouterLink>
      <RouterLink to="/About">About</RouterLink>
      <RouterLink to="/Login">Login</RouterLink>
    </nav>
  </div> -->
  <div>
    <RouterView />
  </div>
  <div>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<style scoped></style>
