import { Context } from '@nuxt/types'

export interface IInjects extends Context {
  $emptyObject: Function
  $emptyArrayObject: Function
  $delay: Function
  $groupBy: Function
  $groupByPro: Function
  $sleep: Function
  $delStorage: Function
  $getStorage: Function
  $setStorage: Function
  $sortBy: Function
  $sortByDesc: Function
  $maxBy: Function
}
