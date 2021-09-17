import { IInjects } from './injects.interface'

export interface ICtx extends IInjects {
  $axios: any
  $bus: any
  $cookies: any
  $device: any
  $vuetify: any
}
