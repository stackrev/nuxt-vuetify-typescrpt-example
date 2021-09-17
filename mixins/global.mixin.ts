import { Component, Vue } from '@/decorators'
import { IDevice } from '~/interfaces'
import { Framework } from 'vuetify'

declare module 'vue/types/vue' {
  interface Vue {
    $device: IDevice
    $vuetify: Framework
  }
}

@Component
export class GMixin extends Vue {
  get isMobile() {
    return this.$device.isMobileOrTablet
  }

  get isDesktop() {
    return this.$device.isDesktop
  }

  get isDark() {
    return this.$vuetify.theme.dark
  }

  get isLight() {
    return !this.$vuetify.theme.dark
  }

  get backUrl() {
    return this.$nuxt.context.from && this.$nuxt.context.from.path
      ? this.$nuxt.context.from.path
      : '/'
  }

  get widthWindow() {
    return this.$vuetify.breakpoint.width
  }

  get heightWindow() {
    return this.$vuetify.breakpoint.height
  }
}
