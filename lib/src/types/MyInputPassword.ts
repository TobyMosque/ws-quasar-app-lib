import type { MyInputProps, MyInputSlots } from './MyInput'
import MyInputPasswordVue from 'components/MyInputPassword.vue'

export type MyInputPassword = InstanceType<typeof MyInputPasswordVue>
export type MyInputPasswordProps = MyInputProps
export type MyInputPasswordSlots = MyInputSlots
