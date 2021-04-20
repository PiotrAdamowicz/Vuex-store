<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="itemsData"
      :options.sync="options"
      :items-per-page="15"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
    <v-btn v-on:click="btnClick()" elevation="2" color="error" text large
      >test</v-btn
    >
    <h2>{{ h2 }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Data",
  data: () => {
    return {
      itemsData: [],
      date: new Date().toISOString().substr(0, 10),
      headers: [
        {
          text: "Currency",
          align: "start",
          sortable: true,
          value: "currency",
        },
        { text: "Amount", value: "amount" },
      ],
      loading: true,
      options: {},
      h2: "test",
    };
  },
  computed: {
    ...mapState(["data", "testingData"]),
    ...mapGetters(["getData", "testData"]),
    localComputed(getData) {
      console.log(getData);
      return getData;
    },
  },
  watch: {
    data(items) {
      this.itemsData = items;
      console.log(this.itemsData);
    },
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    btnData() {
      this.btnClick;
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi(date = "") {
      date = new Date().toISOString().substr(0, 10);
      this.loading = true;
      this.$store.dispatch("getData", date);
      // this.h2 = this.$store.getters.testingData;
    },
    btnClick(date = "") {
      console.log("button works");
      date = new Date().toISOString().substr(0, 10);
      this.$store.dispatch("getData", date);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  height: 3rem;
  color: black;
}
</style>
