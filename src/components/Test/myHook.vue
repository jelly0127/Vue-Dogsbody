<!--
 * @author: Jelly
 * @since: 2023-04-27
 * myHook.vue
-->
<template>
  <div> Mouse position is at: {{ x }}, {{ y }}</div>
</template>

<script setup lang="ts">
import { useMouse } from '@/hooks/myHook';

const { x, y } = useMouse()
</script>

<style lang="less" scoped></style>
