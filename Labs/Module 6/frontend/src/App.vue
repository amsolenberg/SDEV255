<template>
   <NewMessage />
   <br />
   <Messages />
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
