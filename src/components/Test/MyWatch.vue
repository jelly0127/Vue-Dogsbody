<template>
  <div>
    <h3>Watch用法</h3>
    <el-input v-model="inputVal" @keydown.enter="onInput" />
    <ol>
      <li v-for="(item, index) in data.list" :key="index + item">
        <p>{{ item }}</p>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

const inputVal = ref('');
const data = reactive<{
  list: string[],
  name: string
}>({
  list: [],
  name: ''
});

const onInput = () => {
  if (inputVal.value) {
    data.list.push(inputVal.value);
    data.name = inputVal.value;
  }
};
// watch监听ref声明属性的变化
// watch(inputVal, (newVal, oldVal) => {
//   console.log('watch监听inputVal的变化 newVal ------>', newVal);
//   console.log('watch监听inputVal的变化 oldVal ------>', oldVal);
// });
// watch监听reactive声明属性的变化
watch(() => data.name, (newVal, oldVal) => {
  console.log('watch监听data.name的变化 newVal ------>', newVal);
  console.log('watch监听data.name的变化 oldVal ------>', oldVal);
});
// watch(() => data.list, (newVal, oldVal) => {
//   console.log('watch监听data.list的变化 newVal ------>', newVal);
//   console.log('watch监听data.list的变化 oldVal ------>', oldVal);
// }, { deep: true });
// // vue3的watch也可以同时监听多个
// watch([inputVal, () => data.name], (newVal, oldVal) => {
//   console.log('watch监听inputVal和data.name的变化 newVal ------>', newVal);
//   console.log('watch监听inputVal和data.name的变化 oldVal ------>', oldVal);
// });


</script>

<style scoped></style>