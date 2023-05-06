<!--
 * @author: Jelly
 * @since: 2023-04-26
 * Header.vue
-->
<template>
  <div class="root_box">
    <div class="container">
      <a class="left_box">
        <img class="logo">
        <span class="left_box_title">Dogsbody</span>
      </a>
      <div :class="(store.app.isDark ? 'dark' : 'light')" @click="changeThem">
        <img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/appData';
import { onMounted, watchEffect } from 'vue';


const store = useDataStore()
const changeThem = async () => {
  await store.updateTheme()
  await document.body.classList.toggle("light");
}
onMounted(() => {


})
// watchEffect(() => {
//   console.log(store.app.isDark);

// })
</script>

<style lang="less" scoped>
.root_box {
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(230, 227, 227);
  position: sticky;
  top: 0;
}

.container {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 10px;
  height: 46px;
}

.left_box {
  flex-direction: row;
  align-items: center;

  .logo {
    height: 30px;
    width: 30px;
    content: url('./images/DOG3.svg') !important;
  }

  &_title {
    margin-left: 10px;
  }

  cursor: pointer;

}


.dark {
  img {
    width: 22px;
    height: 22px;
    content: url('./images/icon-sun-light.svg');

    &:hover {
      cursor: pointer;
      content: url('./images/icon-sun-dark.svg');
    }
  }

}

.light {
  img {
    width: 22px;
    height: 22px;
    content: url('./images/icon-moon-dark.svg');

    &:hover {
      cursor: pointer;
      content: url('./images/icon-moon-light.svg');
    }
  }

}
</style>
