<template>
  <div>
    <div class="common-layout">
      <el-container>
        <div style="height: 1000px">我很大</div>
        <el-footer class="bg-gray-700">
          <div class="text-light-50">
            <el-row :gutter="20">
              <el-col :span="6"
                ><div>第一栏</div>
                <div>第二行</div>
                <div class="grid-content ep-bg-purple"
              /></el-col>
              <el-col :span="6"
                >第二栏
                <div class="grid-content ep-bg-purple"
              /></el-col>
              <el-col :span="6"
                >第三栏
                <div class="grid-content ep-bg-purple"
              /></el-col>
              <el-col :span="6"
                >第四栏
                <div class="grid-content ep-bg-purple"
              /></el-col>
            </el-row>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
<script setup></script>
