<script setup lang="ts">
import { RouterView } from 'vue-router'
const changeTheme = () => {
  document.body.classList.toggle("dark");
};
</script>

<template>
  <div class="Box">
    <Main />
    <RouterView />
  </div>
</template>

<style scoped lang="less"></style>
