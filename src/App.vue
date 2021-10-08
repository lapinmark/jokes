<template>
  <div class="container">
    <Jokes class="jokes" />
  </div>
</template>

<script>
import Jokes from "./components/Jokes.vue";

export default {
  name: "App",

  components: {
    Jokes,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.jokes {
  margin-top: 20px;
}
</style>
