import type { QInputProps, QInputSlots } from 'quasar'
import MyInputVue from 'components/MyInput.vue'

export type MyInput = InstanceType<typeof MyInputVue>
export type MyInputProps = QInputProps
export type MyInputSlots = QInputSlots
