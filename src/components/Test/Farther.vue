<template>
  <div>
    <h2>这是父组件</h2>
    <h4>下方是子组件的内容</h4>
    <Child :msg="msg" @onReceiveMsg="onReceiveMsg" />
    {{ receiveMsg }}
    <p>子组件2</p>
    <Son />
  </div>
  <myWatch />
  <mySlot>test my slot</mySlot>
  <myHook />
  <Demo />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import Demo from './Demo'
// 传给子组件的内容
const msg = ref('这是父组件传给子组件的内容');


//子组件触发父组件方法传值
const receiveMsg = ref('');
const onReceiveMsg = (params: string) => {
  console.log('接收到子组件的值', params);
  receiveMsg.value = params
}

const message = ref('hello')
provide('message', message.value)
</script>

<style scoped></style>