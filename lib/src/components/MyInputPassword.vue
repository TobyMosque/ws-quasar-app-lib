<template>
  <my-input ref="input" v-bind="props">
    <template v-for="(_, slot) in _slots" :key="slot" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" :key="slot" />
    </template>
  </my-input>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import MyInput from 'components/MyInput.vue'
import type { MyInput as MyInputType } from 'types/MyInput'
import type { MyInputPasswordProps, MyInputPasswordSlots } from 'types/MyInputPassword'

const input = ref<MyInputType>()
const props = withDefaults(defineProps<MyInputPasswordProps>(), {
  filled: true,
  type: 'password'
})
const slots = defineSlots<MyInputPasswordSlots>()
const _slots = computed(() => {
  return typeof slots === 'object' && Array.isArray(slots) && !slots.length ? [undefined] : slots
})
defineExpose({
  focus () {
    input.value?.focus()
  },
  validate (value: never) {
    return input.value?.validate(value)
  }
})
</script>