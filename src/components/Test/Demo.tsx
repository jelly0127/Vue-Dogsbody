import { ref } from 'vue'

const v = ref<string>('')

const Demo = () => {
  return (
    <>
      <input v-model={v.value} type="text" />
      <div>{v.value}</div>
    </>
  )
}

export default Demo
