<template>
  <q-input ref="input" v-bind="props">
    <template v-for="(_, slot) in _slots" :key="slot" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" :key="slot" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { QInput } from 'quasar'
import type { MyInputProps, MyInputSlots } from 'types/MyInput'

const input = ref<QInput>()
const props = withDefaults(defineProps<MyInputProps>(), {
  filled: true
})
const slots = defineSlots<MyInputSlots>()
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