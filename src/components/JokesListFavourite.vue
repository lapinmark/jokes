<template>
  <ul class="jokes__list">
    <JokesItem class="jokes__list-item" :listToShow="likedJokesList" />
  </ul>
</template>

<script>
import JokesItem from "./JokesItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "JokesList",

  components: {
    JokesItem,
  },

  computed: {
    ...mapGetters(["likedJokesList"]),
  },
};
</script>

<style lang="scss" scoped>
.jokes__list-item {
  margin-bottom: 10px;
}
</style>
