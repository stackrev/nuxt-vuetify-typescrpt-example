<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Mixins } from '@/decorators'
import { GMixin } from '@/mixins'

@Component
export default class LayoutComponent extends Mixins(GMixin) {}
</script>
