<!--
 * @author: Jelly
 * @since: 2023-05-05
 * Login.vue
-->
<template>
  <div class="login_container">
    <div class="title">Keeper CMS</div>
    <div class="login_box">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon label-position="top" :rules="rules" class="demo-ruleForm">
        <el-form-item label="Account" prop="account">
          <el-input v-model="ruleForm.account" />
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass" v-if="!isShowLogin">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </el-form-item>
        <p class="label_show" @click="changeShowLogin">{{ !isShowLogin ? 'login' : 'register' }}</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">{{ isShowLogin ? 'Login' : 'Register' }}</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const isShowLogin = ref(true)
const changeShowLogin = () => {
  return isShowLogin.value = !isShowLogin.value
}
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the Account'))
  } else {
    if (value.length < 6) {
      callback(new Error('Account must more then 6'))
    }
    callback()
  }
}
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
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
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  account: '',
})

const rules = reactive<FormRules>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  account: [{ validator: validateAccount, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!', ruleForm)
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

</script>

<style lang="less">
@import '../../assets/main.less';

.login_container {
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .login_box {
    width: 260px;
  }

  .el-input__wrapper {
    flex-direction: row;
  }

  .title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 28px;
  }


  .el-form-item__label {
    color: #ffffff !important;

  }

  .label_show {
    width: 100%;
    flex-direction: row !important;
    font-size: 12px;
    justify-content: flex-end;
    margin-bottom: 10px;
    cursor: pointer;
    text-decoration-line: underline;

    &:hover {
      color: @ColorA !important;
    }
  }

  .el-form-item__content {
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
  }

}
</style>
