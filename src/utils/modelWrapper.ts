import { computed } from "vue"
// https://vanoneang.github.io/article/v-model-in-vue3.html#the-challenge-reduce-boilerplate

export default function useModelWrapper(props: any, emit: any, name = "modelValue") {
  return computed({
    get() {
      return props[name]
    },
    set(value) {
      emit(`update:${name}`, value)
    }
  })
}
