<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Data />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Data from "@/components/Data.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Data,
  },
};
</script>
