/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */
import { extend } from 'quasar'

export default function (api) {
  if (api.hasVite) {
    api.extendViteConf((viteConf, { isClient, isServer }, api) => {
      extend(true, viteConf, {
        optimizeDeps: {
          include: ['lib/components', 'lib/composables', 'lib/resolvers', 'lib/types']
        },
        build: {
          commonjsOptions: {
            include: [/lib[\\/]components/, /lib[\\/]composables/, /lib[\\/]resolvers/, /lib[\\/]types/]
          }
        }
      })

      const index = viteConf.build.commonjsOptions.include.indexOf(/node_modules/);
      if (index != -1) {
        viteConf.build.commonjsOptions.include.splice(index, 1);
      }
      viteConf.build.commonjsOptions.include.unshift(/node_modules/);
    })
  }
}
