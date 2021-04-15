<template>
  <div>{{ msg }}</div>
</template>

<script>
import axios from "axios";

const access_key = "31417285af16596aeed9e5a3d3e2e460";
const url = "latest";

export default {
  name: "Data",
  data: () => {
    return {
      msg: "wooooohooo",
    };
  },
  mounted() {
    axios
      .get(`http://api.exchangeratesapi.io/v1/${url}?access_key=${access_key}`)
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>

<style lang="scss" scoped></style>
