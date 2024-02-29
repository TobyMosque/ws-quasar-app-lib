import MyInputVue from 'components/MyInput.vue'
import MyInputPasswordVue from 'components/MyInputPassword.vue'
import type { MyInput, MyInputProps, MyInputSlots } from 'types/MyInput'
import type { MyInputPassword, MyInputPasswordProps, MyInputPasswordSlots } from 'types/MyInputPassword'
import type { ComponentResolver } from 'unplugin-vue-components'

function MyResolver(): ComponentResolver[] {
  return [{
    type: 'component',
    resolve: async (name: string) => {
      console.log(name)
      if (!name.match(/^My[A-Z]/))
        return
      return { as: name, name: name + 'Vue', from: 'lib' }
    },
  }]
}

export {
  MyInputVue,
  MyInputPasswordVue,
  MyResolver
}

export type {
  MyInput,
  MyInputProps,
  MyInputSlots,
  MyInputPassword,
  MyInputPasswordProps,
  MyInputPasswordSlots
}