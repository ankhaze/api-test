<template>
  <v-container>
    This is a test
    <div @click="getTodos">
      <v-btn text small color="primary">
        Primary
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import { posts } from '../api/example';

export default {
  name: 'HelloWorld',

  data: () => ({
    hola: 'chao',
  }),

  methods: {
    async getTodos() {
      const resultAPI = await posts();
      console.log(resultAPI);
    },
  },

};
</script>
