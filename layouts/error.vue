<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from '@/decorators'
import { GMixin } from '@/mixins'

@Component
export default class ErrorLayoutComponent extends Mixins(GMixin) {
  layout: 'empty'

  title: string = 'Ooh! error'
  pageNotFound: string = '404 Not Found'
  otherError: string = 'An error occurred'

  @Prop({
    required: false,
    type: Object,
  })
  readonly error: Object
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
