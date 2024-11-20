<!-- eslint-disable -->

<template>
   <v-container>
      <v-card outlined>
         <v-toolbar class="bg-grey-darken-4">
            <v-toolbar-title>New Message</v-toolbar-title>
         </v-toolbar>
         <v-row justify="center">
            <v-col class="pa-5" cols="12">
               <v-form>
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
      emits: ['new-message'],
      data: () => ({
         messageBody: '',
      }),
      methods: {
         submit() {
            const newMessage = this.messageBody;
            axios
               .post('http://localhost:3000/messages', { message: newMessage })
               .then(() => {
                  this.$emit('new-message', newMessage);
                  this.messageBody = '';
               })
               .catch((err) => console.error('Post failed', err));
         },
      },
      //   methods: {
      //      submit() {
      //         axios.post('http://localhost:3000/messages', { message: this.messageBody });
      //         this.$root.$emit('newMessage', this.messageBody);
      //      },
      //   },
   };
</script>
