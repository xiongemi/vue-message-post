<template>
  <div id="app" class="sans-serif">
    <MessagePost v-bind="message"></MessagePost>
  </div>
</template>

<script>
import MessagePost from './components/MessagePost.vue';
import * as message from './assets/message.json';

export default {
  name: 'App',
  components: {
    MessagePost
  },
  data() {
    return {
      message: message.default
    };
  }
};
</script>
