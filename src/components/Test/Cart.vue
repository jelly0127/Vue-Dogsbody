<template>
  <table border style='width:800px'>
    <thead>
      <tr>
        <th>名称</th>
        <th>数量</th>
        <th>单价</th>
        <th>总价</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody align="center">
      <tr :key='index' v-for='(item, index) in Data'>
        <td>{{ item.name }}</td>
        <td>
          <button @click="addAndSub(item, false)">-</button>{{ item.num }}
          <button @click="addAndSub(item, true)">+</button>
        </td>
        <td>{{ item.price }}</td>
        <td>{{ item.num * item.price }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>
    </tbody>
    <tfoot>
      <td></td>
      <td></td>
      <td></td>
      <td align="center">合计：{{ totalprice }}</td>
      <td align="center"><button @click='delall'>清空</button></td>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import { reactive, computed, ref, type Ref } from 'vue';
let totalprice: Ref = ref(0)
type Shop = {
  name: string,
  num: number,
  price: number,
}
const Data = reactive<Shop[]>([
  {
    name: '衬衫',
    num: 2,
    price: 120
  },
  {
    name: '裤子',
    num: 3,
    price: 150
  },
  {
    name: '袜子',
    num: 5,
    price: 24
  }
]);

const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num >= 1 && type == false) {
    item.num--
  }
  else if (item.num <= 99 && type == true) {
    item.num++
  }
}

totalprice.value = computed<number>(() => {
  return Data.reduce((prev, next) => {
    return prev + (next.num * next.price)
  }, 0)
})




const del = (index: number) => {
  Data.splice(index, 1)
}

const delall = () => {
  Data.splice(0, Data.length)

}
</script>
<style></style>
