import Vue from 'vue'

const eventBus: any = {}

eventBus.install = function (vue: any) {
  vue.prototype.$bus = new Vue()
}

Vue.use(eventBus)
