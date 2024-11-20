<template>
   <NewMessage @new-message="handleNewMessage" />
   <br />
   <Messages :messages="messages" />
</template>

<script>
   import Messages from './components/Messages.vue';
   import NewMessage from './components/NewMessage.vue';
   import axios from 'axios';

   export default {
      name: 'App',
      components: {
         NewMessage,
         Messages,
      },
      data() {
         return {
            messages: [],
         };
      },
      async created() {
         try {
            const response = await axios.get('http://localhost:3000/messages');
            this.messages = response.data;
         } catch (error) {
            console.error('Error loading messages:', error);
         }
      },
      methods: {
         handleNewMessage(newMessage) {
            this.messages.push(newMessage);
         },
      },
   };
</script>
