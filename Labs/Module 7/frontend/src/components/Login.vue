<!-- eslint-disable -->

<template>
  <v-flex sm8 offset-sm2>
    <v-card>
      <v-toolbar dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4 class="px-3">
              <v-text-field v-model="userName" label="User Name" required> </v-text-field>
            </v-flex>
            <v-flex xs12 md4 class="px-3">
              <v-text-field v-model="password" label="Password" required> </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn class="ma-3" @click="login">Login</v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: '',
      };
    },
    methods: {
      async login() {
        this.$store.dispatch('login', { userName: this.userName, password: this.password });
      },
    },
  };
</script>
