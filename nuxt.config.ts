import type { NuxtConfig } from '@nuxt/types'

import {
  env,
  head,
  css,
  plugins,
  modules,
  axios,
  proxy,
  vuetify,
  build,
  buildModules,
  toast,
  styleResources,
} from './configs'

const config: NuxtConfig = {
  ssr: true,
  components: true,
  env,
  head,
  css,
  plugins,
  modules,
  axios,
  proxy,
  vuetify,
  build,
  buildModules,
  toast,
  styleResources,
}

export default config
