<template>
  <el-row class="min-h-screen bg-emerald-600">
    <el-col :lg="16" :md="12" class="flex justify-center items-center">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">家政服务管理平台</div>
        <div class="text-gray-200 text-sm">此站点进行家政服务及其管理</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="bg-light-50 flex justify-center items-center flex-col">
      <h2 class="font-bold text-3xl text-gray-500">欢迎回来</h2>
      <div class="flex items-center justify-center my-5">
        <span class="h-[1px] w-16 bg-gray-200"></span>
        <span class="text-gray-300">账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <div>
        <div>
          <el-form :model="form" label-width="auto" style="max-width: 600px" class="w-[250px]">
            <el-form-item>
              <el-input v-model="form.name" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.pwd" type="password" placeholder="请输入密码" show-password />
            </el-form-item>
            <el-form-item class="flex-col">
              <div>
                <el-button type="primary" @click="onSubmit" class="w-[250px] my-2">提交</el-button>
              </div>
              <div>
                <el-button @click="toEnroll" class="w-[250px]">注册</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  pwd: ''
})

// 之后需要与服务端判断是否为用户后再做决定
const onSubmit = () => {
  console.log('submit!')
  window.location.href = '/'
}

const toEnroll = () => {
  window.location.href = '/Enroll'
}
</script>

<style></style>
<!-- this is Login page -->
