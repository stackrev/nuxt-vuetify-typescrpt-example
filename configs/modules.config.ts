import { NuxtOptionsModule } from '@nuxt/types/config/module'

export const modules: NuxtOptionsModule[] = [
  '@nuxtjs/axios',
  '@nuxtjs/proxy',
  '@nuxtjs/toast',
  '@nuxtjs/style-resources',
  ['cookie-universal-nuxt', { alias: 'cookiz', parseJSON: false }],
]
