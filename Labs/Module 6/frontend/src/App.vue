<template>
   <v-app>
      <v-toolbar app> </v-toolbar>
      <v-content>
         <NewMessage />
         <br>
         <Messages />
      </v-content>
   </v-app>
</template>

<script>
   import Messages from './components/Messages.vue';
   import NewMessage from './components/NewMessage.vue';

   export default {
      name: 'App',
      components: {
         NewMessage,
         Messages,
      },
   };
</script>
