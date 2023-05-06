import { onMounted, ref } from "vue"

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (e: any) => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => window.addEventListener('mousemove', update))
  onMounted(() => window.addEventListener('mousemove', update))
  return { x, y }
}
