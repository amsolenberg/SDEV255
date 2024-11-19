<!-- eslint-disable -->

<template>
   <div>
      <h4 class="text-h4">Messages</h4>
      <v-list>
         <v-list-item v-for="(message, index) in messages" :key="index" @click="">
            <v-list-item-content>
               <v-list-item-title>{{ message }}</v-list-item-title>
            </v-list-item-content>
         </v-list-item>
      </v-list>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            messages: ['hello', 'hi', "it's working"],
         };
      },
   };
</script>
