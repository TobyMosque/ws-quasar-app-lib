import type { ComponentResolver } from 'unplugin-vue-components'

export function MyResolver(): ComponentResolver[] {
  return [{
    type: 'component',
    resolve: async (name: string) => {
      if (!name.match(/^My[A-Z]/))
        return
      return { as: name, name: name, from: 'lib/components' }
    },
  }]
}