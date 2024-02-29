/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */
export default function (api) {
  if (api.hasVite) {
    api.extendViteConf((viteConf, { isClient, isServer }, api) => {
      viteConf.optimizeDeps = viteConf.optimizeDeps || {};
      viteConf.optimizeDeps.include = viteConf.optimizeDeps.include || [];

      viteConf.build = viteConf.build || {};
      viteConf.build.commonjsOptions = viteConf.build.commonjsOptions || {};
      viteConf.build.commonjsOptions.include =
        viteConf.build.commonjsOptions.include || [];

      viteConf.optimizeDeps.include.push('lib');
      if (Array.isArray(viteConf.build.commonjsOptions.include)) {
        viteConf.build.commonjsOptions.include.unshift(/lib/);
        viteConf.build.commonjsOptions.include.unshift(/lib[\\/]dist[\\/]components/);
        viteConf.build.commonjsOptions.include.unshift(/lib[\\/]dist[\\/]types/);

        const index = viteConf.build.commonjsOptions.include.indexOf(/node_modules/);
        if (index != -1) {
          viteConf.build.commonjsOptions.include.splice(index, 1);
        }
        viteConf.build.commonjsOptions.include.unshift(/node_modules/);
      }
    })
  }
}
