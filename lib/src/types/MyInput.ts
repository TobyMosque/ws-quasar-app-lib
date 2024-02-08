import type { QInputProps, QInputSlots } from 'quasar'
import MyInputComponent from 'components/MyInput.vue'

export type MyInputType = InstanceType<typeof MyInputComponent>
export type MyInputProps = QInputProps
export type MyInputSlots = QInputSlots
