<!-- eslint-disable -->

<template>
   <v-container>
      <v-card outlined>
         <v-toolbar class="bg-grey-darken-4">
            <v-toolbar-title>Messages</v-toolbar-title>
         </v-toolbar>
         <v-list>
            <v-list-item v-for="(message, index) in messages" :key="index">
               <v-list-item-content>
                  <v-list-item-title v-text="message"></v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>
      </v-card>
   </v-container>
</template>

<script>
   export default {
      props: {
         messages: {
            type: Array,
            required: true,
         },
      },
   };
</script>
