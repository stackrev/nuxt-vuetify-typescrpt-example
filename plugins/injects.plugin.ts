import { parse, stringify } from 'flatted'
import { ICtx } from '@/interfaces'

export default function injects(ctx: ICtx, inject: Function) {
  inject('emptyObject', (obj: Object) => {
    return (
      (obj && Object.keys(obj).length === 0 && obj.constructor === Object) ||
      obj === undefined
    )
  })

  inject('emptyArrayObject', (arr: any[]) => {
    if (arr) {
      return arr[0] === undefined
    } else {
      return true
    }
  })

  inject('delay', (t: number) => {
    return new Promise((resolve) => setTimeout(resolve, t))
  })

  inject('groupBy', (arr: any[], key: string | number) => {
    return arr.reduce((rv, x) => {
      rv[x[key]] = rv[x[key]] || []
      rv.push(x)
      return rv
    }, {})
  })

  inject('groupByPro', (arrayObjects: any[], field: string) => {
    const groups: any[] = []
    arrayObjects.forEach((obj) => {
      if (!groups.includes(obj[field])) groups.push(obj.group)
    })

    for (let i = 0; i < groups.length; i++) {
      const group = groups[i]
      groups[i] = {
        key: group,
        items: [],
      }
      arrayObjects.forEach((obj) => {
        if (obj[field] === group) groups[i].items.push(obj)
      })
    }
    return groups
  })

  inject('sleep', (ms: number = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  })

  inject('delStorage', (key: string) => {
    if (process.browser) localStorage.removeItem(key)
  })

  inject('getStorage', (key: string) => {
    try {
      if (process.browser) return parse(localStorage.getItem(key) || '')
      else return undefined
    } catch (error) {}
  })

  inject('setStorage', (key: string, data: any) => {
    if (process.browser) localStorage.setItem(key, stringify(data))
  })

  inject('sortBy', (arr: any[], key: string) => {
    return arr.sort(function (a, b) {
      return a[key] - b[key]
    })
  })

  inject('sortByDesc', (arr: any[], key: string) => {
    return arr.sort(function (a, b) {
      return b[key] - a[key]
    })
  })

  inject('maxBy', (arr: any[], key: string) => {
    return arr.reduce((max, b) => Math.max(max, b[key]), arr[0][key])
  })
}
