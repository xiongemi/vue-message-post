<template>
  <article class="flex ba b--black-10 pa2">
    <img :src="getImgUrl(profile)" class="br-100 h3 w3 dib" alt="avatar" />
    <section class="ml2">
      <header class="flex items-center">
        <div class="b">{{ name }}</div>
        <div class="br-pill ml2 ph2 pv1 bg-dark-gray white f7">AUTHOR</div>
        <div class="ml2 f7 gray">• <timeago :datetime="timeStamp"></timeago></div>
      </header>
      <p>
        {{ message }}
      </p>
      <footer>
        <Button>Reply</Button>
        <Button>{{ counts.replies }} Replies</Button>
        <Button>
          <span class="material-icons f5 v-mid">
            keyboard_arrow_up
          </span>
          {{ counts.likes }}
        </Button>
        <Button>
          <span class="material-icons f5 v-mid">
            keyboard_arrow_down
          </span>
          {{ counts.dislikes }}
        </Button>
      </footer>
    </section>
  </article>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'MessagePost',
  components: {
    Button
  },
  props: {
    name: String,
    profile: String,
    isAuthor: Boolean,
    message: String,
    timeStamp: String,
    counts: Object
  },
  methods: {
    getImgUrl(picture) {
      return require('../assets/' + picture);
    }
  }
};
</script>

<style>
article:hover button {
  color: black;
}
</style>
