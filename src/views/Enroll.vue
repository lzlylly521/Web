<template>
  <div>
    <WebNav />
  </div>
  <div class="justify-center items-center flex text-gray-500 text-5xl my-10">注册信息填写</div>

  <div class="flex justify-center items-center my-20">
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
            :on-error="handleAvatarError"
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
  </div>
</template>

<script lang="ts" setup>
import WebNav from '../components/WebNav.vue'

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const imageUrl = ref('')

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const value = ref('')
const options = [
  {
    value: 'intj',
    label: 'intj'
  },
  {
    value: 'intp',
    label: 'intp'
  },
  {
    value: 'entj',
    label: 'entj'
  },
  {
    value: 'entp',
    label: 'entp'
  },
  {
    value: 'infj',
    label: 'infj'
  },
  {
    value: 'infp',
    label: 'infp'
  },
  {
    value: 'enfj',
    label: 'enfj'
  },
  {
    value: 'enfp',
    label: 'enfp'
  },
  {
    value: 'istj',
    label: 'istj'
  },
  {
    value: 'isfj',
    label: 'isfj'
  },
  {
    value: 'estj',
    label: 'estj'
  },
  {
    value: 'esfj',
    label: 'esfj'
  },
  {
    value: 'istp',
    label: 'istp'
  },
  {
    value: 'isfp',
    label: 'isfp'
  },
  {
    value: 'estp',
    label: 'estp'
  },
  {
    value: 'esfp',
    label: 'esfp'
  }
]

const radio1 = ref('1')

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入年龄'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('请输入数字'))
    } else {
      if (value < 18) {
        callback(new Error('年龄必须大于18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请确认密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error('两次输入不一致'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  imgurl: '',
  name: '',
  pass: '',
  checkPass: '',
  age: '',
  sex: '',
  adress: '',
  education: '',
  email: '',
  birth: '',
  phone: '',
  mbti: '',
  habbit: '',
  job: '',
  experience: '',
  hometown: '',
  desc: '',
  character: ''
})

const rules = reactive<FormRules<typeof ruleForm>>({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度应该为3个字到10个字', trigger: 'blur' }
  ],
  pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
  checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
  age: [{ required: true, validator: checkAge, trigger: 'blur' }],
  phone: [{ required: true, message: '请输入联系方式' }]
})

// 提交文件如果查询失败则添加数据并跳转
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

// 分割线

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const handleAvatarError: UploadProps['onError'] = (response, uploadFile) => {
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  console.log('Error')
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
