<!-- eslint-disable -->

<template>
   <v-container>
      <v-card outlined>
         <v-toolbar class="bg-grey-darken-4">
            <v-toolbar-title>Messages</v-toolbar-title>
         </v-toolbar>
         <v-list>
            <v-list-item v-for="(message, index) in messages" :key="index" @click="">
               <v-list-item-content>
                  <v-list-item-title>{{ message }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
      </v-card>
   </v-container>
</template>

<script>
   import axios from 'axios';
   export default {
      data() {
         return {
            messages: ['hello', 'hi', "it's working"],
         };
      },
      async created() {
         this.messages = (await axios.get('http://localhost:3000/messages')).data;
      },
   };
</script>
