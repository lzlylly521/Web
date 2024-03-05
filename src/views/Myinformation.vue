<script setup>
import WebNav from '@/components/WebNav.vue'
</script>
<template>
  <div><WebNav /></div>
  <div>我的信息</div>
  <!-- <div class="flex justify-center items-center my-20">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
    >
      <el-form-item label="用户照片" prop="imgurl">
        <el-input v-model.number="ruleForm.imgurl" type="file" accept=".png, .jpg, .jpeg" />
        <div>
          <el-upload
            class="avatar-uploader"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="uploadError"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="用户密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age" />
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model.number="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="住址" prop="adress">
        <el-input v-model.number="ruleForm.adress" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="教育经历" prop="education">
        <el-input v-model.number="ruleForm.education" />
      </el-form-item>
      <el-form-item label="email" prop="email">
        <el-input v-model.number="ruleForm.email" />
      </el-form-item>
      <el-form-item label="出生日期" prop="birth">
        <el-date-picker
          v-model="ruleForm.birth"
          type="date"
          placeholder="输入出生日期"
          style="width: 100%"
        />
      </el-form-item>
      <el-form-item label="人格类型" prop="mbti">
        <el-select v-model="ruleForm.mbti" clearable placeholder="Select" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="工作岗位" prop="job">
        <el-input v-model.number="ruleForm.job" />
      </el-form-item>
      <el-form-item label="家乡地址" prop="hometown">
        <el-input v-model.number="ruleForm.hometown" />
      </el-form-item>
      <el-form-item label="兴趣爱好" prop="habbit">
        <el-input v-model.number="ruleForm.habbit" />
      </el-form-item>
      <el-form-item label="恋爱经历" prop="experience">
        <el-input v-model.number="ruleForm.experience" />
      </el-form-item>
      <el-form-item label="需求描述">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="自我描述">
        <el-input v-model="ruleForm.character" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div> -->
</template>
<!-- this is Myinformation -->
