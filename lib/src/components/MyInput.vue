<template>
  <q-input ref="input" v-bind="props">
    <template v-for="(_, slot) in slotsHotfix" :key="slot" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" :key="slot" />
    </template>
  </q-input>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { QInput } from 'quasar'
import { useSlotsHotfix } from 'composables/slots'
import type { MyInputProps, MyInputSlots } from 'types/MyInput'

const input = ref<QInput>()
const props = withDefaults(defineProps<MyInputProps>(), {
  filled: true
})

const slots = defineSlots<MyInputSlots>()
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