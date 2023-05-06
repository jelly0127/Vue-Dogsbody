<template>
  <div>
    <h3>下方是子组件接收的父组件信息</h3>
    <p>---{{ props.msg }}</p>
  </div>
  <div>
    <el-input v-model="inputVal" placeholder="Please input" />
    <el-button @click="sendMsg">点击传值给父组件参数</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// ts的用法
interface PropsType {
  msg: string
}
const props = withDefaults(defineProps<PropsType>(), {
  msg: '' // 默认值
});

interface Emitype {
  (e: 'onReceiveMsg', params: string): void
}
const inputVal = ref('');
const emit = defineEmits<Emitype>()
const sendMsg = () => {
  // 传input值给父组件
  emit("onReceiveMsg", inputVal.value)
}


</script>

<style scoped></style>