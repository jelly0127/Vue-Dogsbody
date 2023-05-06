<!--
 * @author: Jelly
 * @since: 2023-04-27
 * Son.vue
-->
<template>
  <div class="son_container">
    <p>子组件2</p>
    provide-inject:
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const message = inject('message')

console.log(111, message);

</script>

<style lang="less" scoped>
.son_container {
  height: 100px;
  width: 100px;
  border: 1px solid yellow;
}
</style>
