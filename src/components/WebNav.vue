<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img style="width: 100px" src="/src/assets/logo.svg" alt="Vue logo" />
      </el-menu-item>
      <div class="flex-grow" />
      <RouterLink to="/"> <el-menu-item index="1"> 首页</el-menu-item></RouterLink>
      <el-sub-menu index="2">
        <template #title>服务</template>
        <RouterLink to="/Serve/Family"
          ><el-menu-item index="2-1">家庭服务</el-menu-item></RouterLink
        >
        <RouterLink to="/Serve/Company"
          ><el-menu-item index="2-2">公司服务</el-menu-item></RouterLink
        >
        <RouterLink to="/Serve/Administrative"
          ><el-menu-item index="2-3">行政服务</el-menu-item></RouterLink
        >
        <RouterLink to="/Serve/Custom"
          ><el-menu-item index="2-4">定制服务</el-menu-item></RouterLink
        >
      </el-sub-menu>
      <RouterLink to="/About"><el-menu-item index="3">关于</el-menu-item></RouterLink>
      <RouterLink to="/Join"><el-menu-item index="4">加入我们</el-menu-item></RouterLink>
      <RouterLink to="/Myform"><el-menu-item index="5">订单管理</el-menu-item></RouterLink>
      <RouterLink to="/Myinformation"><el-menu-item index="6">我的信息</el-menu-item></RouterLink>
      <RouterLink to="/Manager"><el-menu-item index="7">平台管理</el-menu-item></RouterLink>
      <RouterLink to="/Login"><el-menu-item index="8">登录</el-menu-item></RouterLink>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
<!-- this is WebNav page -->
