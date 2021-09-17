<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
      </v-card>
      <v-card>
        <v-card-title class="text-center">
          <v-col class="pa-0 text-center">
            {{ message }}
          </v-col>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Mixins } from '@/decorators'
import { GMixin } from '@/mixins'

@Component
export default class YourComponent extends Mixins(GMixin) {
  message: string = 'Welcome to the Vuetify + Nuxt.js template'
}
</script>
