<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo h-[92vh]"
          default-active="3"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>管理系统</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1"
                ><RouterLink to="/Manager/Accountinformation"
                  >用户信息管理</RouterLink
                ></el-menu-item
              >
              <el-menu-item index="1-2">用户评价信息管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">员工信息管理</el-menu-item>
              <el-menu-item index="1-4">员工评价信息管理</el-menu-item>
              <el-menu-item index="1-5">员工薪资信息管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>订单信息管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><icon-menu /></el-icon>
            <span>管理员信息管理</span>
          </el-menu-item>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>系统信息管理</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="4-1">日志信息管理</el-menu-item>
              <el-menu-item index="4-2">收入信息管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
