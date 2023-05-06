<!--
 * @author: Jelly
 * @since: 2023-04-27
 * mySlot.vue
-->
<template>
  <div>Slot用法</div>
  <div class="slot_box">
    <strong>Error!</strong>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.slot_box {
  color: greenyellow;
  height: 100px;
  width: 100px;
  padding: 10px 20px;
  border: 1px solid pink;
}

strong {
  color: red;
}
</style>
