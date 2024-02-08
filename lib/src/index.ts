import MyInputComponent from 'components/MyInput.vue'
import MyInputPasswordComponent from 'components/MyInputPassword.vue'
import type { MyInputType, MyInputProps, MyInputSlots } from 'types/MyInput'
import type { MyInputPasswordType, MyInputPasswordProps, MyInputPasswordSlots } from 'types/MyInputPassword'

const MyInput: MyInputType = MyInputComponent as never
const MyInputPassword: MyInputPasswordType = MyInputPasswordComponent as never
export {
  MyInput,
  MyInputPassword
}

export type {
  MyInputType,
  MyInputProps,
  MyInputSlots,
  MyInputPasswordType,
  MyInputPasswordProps,
  MyInputPasswordSlots
}