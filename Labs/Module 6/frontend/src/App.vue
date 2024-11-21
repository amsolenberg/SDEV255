<template>
  <v-app>
    <v-app-bar app>
      <v-btn text>Messages</v-btn>
      <v-spacer></v-spacer>
      <v-btn text>Login</v-btn>
    </v-app-bar>>
    <v-main>
      <br>
      <NewMessage />
      <br>
      <Messages />
    </v-main>
  </v-app>
</template>

<script>
  import Messages from './components/Messages';
  import NewMessage from './components/NewMessage';

  export default {
    name: 'App',

    components: {
      Messages,
      NewMessage,
    },

    data: () => ({
      //
    }),
  };
</script>
