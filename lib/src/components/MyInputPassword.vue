<template>
  <my-input ref="input" v-bind="props">
    <template v-for="(_, slot) in slotsHotfix" :key="slot" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" :key="slot" />
    </template>
  </my-input>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useSlotsHotfix } from 'composables/slots'
import type { MyInput } from 'types/MyInput'
import type { MyInputPasswordProps, MyInputPasswordSlots } from 'types/MyInputPassword'

const input = ref<MyInput>()
const props = withDefaults(defineProps<MyInputPasswordProps>(), {
  filled: true,
  type: 'password'
})

const slots = defineSlots<MyInputPasswordSlots>()
const slotsHotfix = useSlotsHotfix(slots)
defineExpose({
  focus () {
    input.value?.focus()
  },
  validate (value: never) {
    return input.value?.validate(value)
  }
})
</script>