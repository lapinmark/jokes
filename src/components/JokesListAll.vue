<template>
  <ul class="jokes__list">
    <JokesItem class="jokes__list-item" :listToShow="searchedJokesList" />
  </ul>
</template>

<script>
import JokesItem from "./JokesItem.vue";
import { mapState } from "vuex";

export default {
  name: "JokesList",

  components: {
    JokesItem,
  },

  computed: {
    ...mapState(["searchedJokesList"]),
  },
};
</script>

<style lang="scss" scoped>
.jokes__list {
  margin-bottom: 30px;
}
</style>
