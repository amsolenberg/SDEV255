<!-- eslint-disable -->

<template>
   <v-container>
      <v-card outlined>
         <v-toolbar class="bg-grey-darken-4">
            <v-toolbar-title>New Message</v-toolbar-title>
         </v-toolbar>
         <v-row justify="center">
            <v-col class="pa-5" cols="12">
               <v-form v-model="valid">
                  <v-row>
                     <v-col cols="12">
                        <v-text-field v-model="messageBody" label="Message" required></v-text-field>
                     </v-col>
                  </v-row>
                  <v-row class="pl-3 pb-3">
                     <v-btn @click="submit">submit</v-btn>
                  </v-row>
               </v-form>
            </v-col>
         </v-row>
      </v-card>
   </v-container>
</template>

<script>
   import axios from 'axios';
   export default {
      data() {
         return {
            messageBody: '123',
         };
      },
      async created() {
         this.messages = (await axios.get('http://localhost:3000/messages')).data;
      },
      methods: {
         submit() {
            console.log(this.messageBody);
         },
      },
   };
</script>
